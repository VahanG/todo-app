# Set the base image to node
FROM node:alpine

# Provides cached layer for node_modules
#ADD package.json /tmp/package.json
#ADD package-lock.json /tmp/package-lock.json
#RUN cd /tmp && npm install
#RUN mkdir -p /src && cp -a /tmp/node_modules /src/

# Define working directory
WORKDIR /src
ADD . /src

#EXPOSE 8088

# Run app using node (nodemon on dev)
#CMD ["/bin/sh", "start.sh"]
CMD ["node", "index.js"]