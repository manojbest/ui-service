echo "Start Building"

#install node packages
npm install

#insatll bower components
bower install

#prepare build
gulp build
cd dist
mv index*.html index.html

cd ..

cp -R bower_components/bootstrap/fonts dist

cp -R app/images dist
cd dist
cp images/select2.png styles
cd ..
cp bower_components/angular-ui-grid/ui-grid.svg dist/styles
cp bower_components/angular-ui-grid/ui-grid.ttf dist/styles
cp bower_components/angular-ui-grid/ui-grid.woff dist/styles
#build docker image
docker build -t postcoder/ui-service .
