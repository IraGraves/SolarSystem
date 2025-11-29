import * as THREE from 'three';

/**
 * Creates a magnetic field visualization for a celestial body.
 *
 * @param {Object} bodyData - The data object for the planet or moon
 * @param {number} radius - The radius of the body in scene units
 * @returns {THREE.Group} The group containing the magnetic field lines
 */
export function createMagneticField(bodyData, radius) {
  if (!bodyData.magneticField) return null;

  const { strength, tilt, color } = bodyData.magneticField;
  const group = new THREE.Group();
  group.name = 'MagneticField';

  // Number of field lines
  const numLines = 16;
  const segments = 64;

  // Material for the field lines
  const material = new THREE.LineBasicMaterial({
    color: color,
    transparent: true,
    opacity: 0.3,
    blending: THREE.AdditiveBlending,
  });

  // Generate field lines
  for (let i = 0; i < numLines; i++) {
    const angle = (i / numLines) * Math.PI * 2;

    // Create multiple loops per angle for volume
    for (let scale = 1.5; scale <= 3.0; scale += 0.5) {
      const points = [];

      // Dipole field equation approximation
      // r = L * sin^2(theta)
      // L is the "shell parameter" (distance at equator)

      // Adjust L based on strength parameter
      // Strength now represents the approximate size in planetary radii.
      // We create shells from 50% to 100% of that size.
      // scale goes from 1.5 to 3.0 (4 steps).
      // We map this to 0.5 * strength to 1.0 * strength.
      const normalizedScale = scale / 3.0; // 0.5 to 1.0
      const L = radius * strength * normalizedScale;

      for (let j = 0; j <= segments; j++) {
        // Theta goes from 0 to PI (pole to pole)
        // Avoid exactly 0 and PI to prevent singularities
        const theta = 0.1 + (j / segments) * (Math.PI - 0.2);

        const r = L * Math.sin(theta) ** 2;

        // Convert spherical to cartesian
        // x = r * sin(theta) * cos(phi)
        // y = r * sin(theta) * sin(phi)
        // z = r * cos(theta)
        // We align the dipole axis with Y initially

        const x = r * Math.sin(theta) * Math.cos(angle);
        const z = r * Math.sin(theta) * Math.sin(angle);
        const y = r * Math.cos(theta);

        points.push(new THREE.Vector3(x, y, z));
      }

      const geometry = new THREE.BufferGeometry().setFromPoints(points);
      const line = new THREE.Line(geometry, material);
      group.add(line);
    }
  }

  // Apply tilt
  // Tilt is usually given relative to the rotation axis
  if (tilt) {
    const tiltRadians = tilt * (Math.PI / 180);
    group.rotation.z = tiltRadians; // Tilt around Z axis
  }

  // Initial visibility
  group.visible = false;

  return group;
}

/**
 * Creates a realistic, chaotic magnetic field for the Sun using the Parker Spiral model.
 *
 * @param {THREE.Mesh} sunMesh - The Sun mesh
 * @returns {THREE.Group} The group containing the field lines
 */
export function createSunMagneticField(sunMesh) {
  const group = new THREE.Group();
  group.name = 'MagneticField';

  const numLines = 100; // Reduced from 500 to 100 to avoid "solid ball" look
  const segments = 100; // Segments per line
  const totalVertices = numLines * segments;

  const positions = new Float32Array(totalVertices * 3);
  const lineIndices = new Float32Array(totalVertices);
  const segmentRatios = new Float32Array(totalVertices);

  for (let i = 0; i < numLines; i++) {
    for (let j = 0; j < segments; j++) {
      const index = i * segments + j;

      // We don't need actual positions here, the shader calculates them.
      // But Three.js needs bounding box calculation, so let's put dummy values
      // or just rely on frustum culling being disabled if needed.
      positions[index * 3] = 0;
      positions[index * 3 + 1] = 0;
      positions[index * 3 + 2] = 0;

      lineIndices[index] = i;
      segmentRatios[index] = j / (segments - 1);
    }
  }

  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  geometry.setAttribute('lineIndex', new THREE.BufferAttribute(lineIndices, 1));
  geometry.setAttribute('segmentRatio', new THREE.BufferAttribute(segmentRatios, 1));

  // Custom Shader Material
  const material = new THREE.ShaderMaterial({
    uniforms: {
      uTime: { value: 0 },
      uColor: { value: new THREE.Color(0xffff00) }, // Yellow
      uSunRadius: { value: 5.0 }, // Match Sun radius
    },
    vertexShader: `
      uniform float uTime;
      uniform float uSunRadius;
      attribute float lineIndex;
      attribute float segmentRatio;
      varying float vOpacity;

      // Simplex 3D Noise function (simplified)
      vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
      vec4 mod289(vec4 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
      vec4 permute(vec4 x) { return mod289(((x*34.0)+1.0)*x); }
      vec4 taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }

      float snoise(vec3 v) {
        const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;
        const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);

        // First corner
        vec3 i  = floor(v + dot(v, C.yyy) );
        vec3 x0 = v - i + dot(i, C.xxx) ;

        // Other corners
        vec3 g = step(x0.yzx, x0.xyz);
        vec3 l = 1.0 - g;
        vec3 i1 = min( g.xyz, l.zxy );
        vec3 i2 = max( g.xyz, l.zxy );

        //   x0 = x0 - 0.0 + 0.0 * C.xxx;
        //   x1 = x0 - i1  + 1.0 * C.xxx;
        //   x2 = x0 - i2  + 2.0 * C.xxx;
        //   x3 = x0 - 1.0 + 3.0 * C.xxx;
        vec3 x1 = x0 - i1 + C.xxx;
        vec3 x2 = x0 - i2 + C.yyy; // 2.0*C.x = 1/3 = C.y
        vec3 x3 = x0 - D.yyy;      // -1.0+3.0*C.x = -0.5 = -D.y

        // Permutations
        i = mod289(i);
        vec4 p = permute( permute( permute(
                  i.z + vec4(0.0, i1.z, i2.z, 1.0 ))
                + i.y + vec4(0.0, i1.y, i2.y, 1.0 ))
                + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));

        // Gradients: 7x7 points over a square, mapped onto an octahedron.
        // The ring size 17*17 = 289 is close to a multiple of 49 (49*6 = 294)
        float n_ = 0.142857142857; // 1.0/7.0
        vec3  ns = n_ * D.wyz - D.xzx;

        vec4 j = p - 49.0 * floor(p * ns.z * ns.z);  //  mod(p,7*7)

        vec4 x_ = floor(j * ns.z);
        vec4 y_ = floor(j - 7.0 * x_ );    // mod(j,N)

        vec4 x = x_ *ns.x + ns.yyyy;
        vec4 y = y_ *ns.x + ns.yyyy;
        vec4 h = 1.0 - abs(x) - abs(y);

        vec4 b0 = vec4( x.xy, y.xy );
        vec4 b1 = vec4( x.zw, y.zw );

        //vec4 s0 = vec4(lessThan(b0,0.0))*2.0 - 1.0;
        //vec4 s1 = vec4(lessThan(b1,0.0))*2.0 - 1.0;
        vec4 s0 = floor(b0)*2.0 + 1.0;
        vec4 s1 = floor(b1)*2.0 + 1.0;
        vec4 sh = -step(h, vec4(0.0));

        vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;
        vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;

        vec3 p0 = vec3(a0.xy,h.x);
        vec3 p1 = vec3(a0.zw,h.y);
        vec3 p2 = vec3(a1.xy,h.z);
        vec3 p3 = vec3(a1.zw,h.w);

        //Normalise gradients
        vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));
        p0 *= norm.x;
        p1 *= norm.y;
        p2 *= norm.z;
        p3 *= norm.w;

        // Mix final noise value
        vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
        m = m * m;
        return 42.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1),
                                      dot(p2,x2), dot(p3,x3) ) );
      }

      void main() {
        // Basic Parker Spiral parameters
        float r = uSunRadius + segmentRatio * 2000.0; // Extend to 2000 units (40 AU)
        
        // Randomize starting angles based on lineIndex
        float phi0 = lineIndex * 123.45; 
        float theta0 = lineIndex * 67.89;
        
        // Spiral equation: phi increases with radius
        // Solar wind speed / rotation rate factor
        float spiralFactor = 0.1; 
        float phi = phi0 + (r - uSunRadius) * spiralFactor;
        
        // Convert spherical to cartesian
        // Distribute lines roughly spherically using theta0
        // We use a pseudo-random distribution for theta
        float theta = acos(2.0 * fract(theta0 * 0.1) - 1.0); // -1 to 1 mapped to 0 to PI
        
        float x = r * sin(theta) * cos(phi);
        float y = r * cos(theta); // Up axis
        float z = r * sin(theta) * sin(phi);
        
        // Add chaotic noise (turbulence)
        // Noise moves with time and varies by position
        float noiseScale = 0.05 * r; // Turbulence increases with distance
        float timeScale = uTime * 0.5;
        
        vec3 noisePos = vec3(x * 0.05, y * 0.05, z * 0.05 + timeScale);
        float nX = snoise(noisePos);
        float nY = snoise(noisePos + vec3(100.0));
        float nZ = snoise(noisePos + vec3(200.0));
        
        vec3 pos = vec3(x, y, z) + vec3(nX, nY, nZ) * noiseScale;

        // Pass opacity to fragment shader
        // Fade out at the start (near sun surface) and at the end
        float fadeStart = smoothstep(0.0, 0.1, segmentRatio);
        float fadeEnd = 1.0 - smoothstep(0.8, 1.0, segmentRatio);
        vOpacity = fadeStart * fadeEnd * 0.03; // Max opacity reduced to 0.03

        vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
        gl_Position = projectionMatrix * mvPosition;
      }
    `,
    fragmentShader: `
      uniform vec3 uColor;
      varying float vOpacity;

      void main() {
        gl_FragColor = vec4(uColor, vOpacity);
      }
    `,
    transparent: true,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
  });

  const lines = new THREE.Line(geometry, material);
  // Use LineSegments if we wanted disconnected segments, but here we want continuous lines.
  // However, BufferGeometry with 'position' attribute assumes a single continuous line strip
  // unless we use an index buffer or separate objects.
  // To draw multiple separate lines with a single draw call, we can use THREE.LineSegments
  // and duplicate vertices, OR just accept that there's a "jump" line connecting the end
  // of one spiral to the start of the next.
  // Given the chaotic nature and transparency, the jump lines might be visible artifacts.
  // Better approach: Use LineSegments and manually duplicate vertices (start, end) for each segment.

  // Let's rebuild geometry for LineSegments to avoid jump artifacts
  const segmentVertices = new Float32Array(numLines * (segments - 1) * 2 * 3);
  const segmentIndices = new Float32Array(numLines * (segments - 1) * 2);
  const segmentRatiosSeg = new Float32Array(numLines * (segments - 1) * 2);

  let ptr = 0;
  let ptrAttr = 0;

  for (let i = 0; i < numLines; i++) {
    for (let j = 0; j < segments - 1; j++) {
      // Vertex 1 (Start of segment)
      segmentIndices[ptrAttr] = i;
      segmentRatiosSeg[ptrAttr] = j / (segments - 1);
      ptrAttr++;

      // Vertex 2 (End of segment)
      segmentIndices[ptrAttr] = i;
      segmentRatiosSeg[ptrAttr] = (j + 1) / (segments - 1);
      ptrAttr++;
    }
  }

  const geometrySegments = new THREE.BufferGeometry();
  geometrySegments.setAttribute('position', new THREE.BufferAttribute(segmentVertices, 3)); // Dummy positions
  geometrySegments.setAttribute('lineIndex', new THREE.BufferAttribute(segmentIndices, 1));
  geometrySegments.setAttribute('segmentRatio', new THREE.BufferAttribute(segmentRatiosSeg, 1));

  const lineSegments = new THREE.LineSegments(geometrySegments, material);
  lineSegments.frustumCulled = false; // Bounds are dynamic/unknown in shader

  group.add(lineSegments);

  // Add userData to access material for updates
  group.userData.material = material;

  return group;
}
