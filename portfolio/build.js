const fs = require("fs");
const path = require("path");

const root = __dirname;
const dist = path.join(root, "dist");

const entries = [
  "index.html",
  "styles.css",
  "app.js",
  "public"
];

function removeDir(target) {
  if (fs.existsSync(target)) {
    fs.rmSync(target, { recursive: true, force: true });
  }
}

function copyEntry(source, destination) {
  const stat = fs.statSync(source);

  if (stat.isDirectory()) {
    fs.mkdirSync(destination, { recursive: true });
    for (const child of fs.readdirSync(source)) {
      copyEntry(path.join(source, child), path.join(destination, child));
    }
    return;
  }

  fs.mkdirSync(path.dirname(destination), { recursive: true });
  fs.copyFileSync(source, destination);
}

removeDir(dist);
fs.mkdirSync(dist, { recursive: true });

for (const entry of entries) {
  copyEntry(path.join(root, entry), path.join(dist, entry));
}

console.log("Static portfolio built to dist/");
