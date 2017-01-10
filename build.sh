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
#build docker image
docker build -t postcoder/ui-service .
