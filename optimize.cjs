const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const assetDirs = [
  path.join(__dirname, 'src', 'assets', 'images'),
  path.join(__dirname, 'src', 'assets', 'Certificate')
];

async function optimizeImages() {
  for (const dir of assetDirs) {
    if (!fs.existsSync(dir)) continue;

    const files = fs.readdirSync(dir);
    for (const file of files) {
      if (file.match(/\.(png|jpe?g)$/i)) {
        const inputPath = path.join(dir, file);
        const name = path.basename(file, path.extname(file));
        const outputPath = path.join(dir, `${name}.webp`);
        
        try {
          await sharp(inputPath)
            .webp({ quality: 80 })
            .toFile(outputPath);
          
          console.log(`Converted ${file} to ${name}.webp`);
          // optionally remove the old file
          fs.unlinkSync(inputPath);
        } catch (err) {
          console.error(`Error converting ${file}:`, err);
        }
      }
    }
  }
}

optimizeImages().then(() => console.log('Done optimizing images!'));
