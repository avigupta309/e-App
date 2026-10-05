import fs from "fs";
import path from 'path'

const featureName = process.argv[2];

if (!featureName) {
  console.error("Please provide a feature name.");
  console.error("Example: npm run feature auth");
  process.exit(1);
}

const featurePath = path.resolve(process.cwd(), "src", "features", featureName);

const folders = ["components", "services", "screens", "utils", "types"];

fs.mkdirSync(featurePath, { recursive: true });

for (const folder of folders) {
  fs.mkdirSync(path.join(featurePath, folder), { recursive: true });
}

fs.writeFileSync(path.join(featurePath, "index.ts"), "");

console.log(
  `✓ Feature "${featureName}" created at src/features/${featureName}`,
);
