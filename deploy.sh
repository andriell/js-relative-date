rm -rf dist
npm run test
npm run build
cp package.json dist/src/package.json
cp README.md dist/src/README.md
cp README_RU.md dist/src/README_RU.md
cp LICENSE dist/src/LICENSE
cp .npmrc dist/src/.npmrc
cp .npmignore dist/src/.npmignore
cd dist/src
npm publish --access public
