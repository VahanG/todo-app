
#!/bin/bash

if [ $NODE_ENV == 'DEV' ]
then
    npm install -g nodemon
    nodemon --inspect=0.0.0.0 ./index.js;
else
    node ./index.js;
fi