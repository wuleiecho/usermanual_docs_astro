rm -rf dist/ dist.tar.gz
npm run build
tar zcvf dist.tar.gz ./dist
sh ~/scp2143.sh dist.tar.gz
