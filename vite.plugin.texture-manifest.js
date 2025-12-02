import fs from 'node:fs';
import path from 'node:path';

export default function textureManifestPlugin() {
  return {
    name: 'texture-manifest',
    buildStart() {
      const publicDir = path.resolve(__dirname, 'public');
      const texturesDir = path.join(publicDir, 'assets', 'textures');
      const outputFile = path.join(publicDir, 'assets', 'textures.json');

      if (!fs.existsSync(texturesDir)) {
        console.warn('Texture directory not found:', texturesDir);
        return;
      }

      const files = [];

      function scanDirectory(dir) {
        const items = fs.readdirSync(dir);

        for (const item of items) {
          const fullPath = path.join(dir, item);
          const stat = fs.statSync(fullPath);

          if (stat.isDirectory()) {
            scanDirectory(fullPath);
          } else {
            // Create relative path from public directory
            // e.g., assets/textures/lowres/earth.webp
            let relativePath = path.relative(publicDir, fullPath);

            // Ensure forward slashes for web compatibility
            relativePath = relativePath.split(path.sep).join('/');

            files.push(relativePath);
          }
        }
      }

      console.log('Generating texture manifest...');
      scanDirectory(texturesDir);

      fs.writeFileSync(outputFile, JSON.stringify(files, null, 2));
      console.log(`Texture manifest generated with ${files.length} files.`);
    },
  };
}
