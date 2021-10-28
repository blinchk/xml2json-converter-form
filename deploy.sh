set -e
yarn build
cd dist
git init
git add -A
git commit -m 'Deployment'
git push -f https://github.com/blinchk/xml2json-converter-form.git master:gh-pages
cd -