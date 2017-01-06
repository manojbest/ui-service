echo "Start Building"

#install node packages
npm install

#insatll bower components
bower install

#prepare build
gulp build
cd dist
mv index-00e4c2f9e3.html index.html

cd ..

cp -R bower_components/bootstrap/fonts dist

cp -R app/images dist

#build docker image
docker build -t postcoder/ui-service .


