# Creates a parent image from docker hub.
FROM node:17-alpine
# install nodemon globally
RUN npm install -g nodemon
# set a working directory for all the codes and dependencies. A folder app will be created in the root directory and will be set as the new folder for the rest of the actions.
WORKDIR /app
# Copying package.json so that all the deps can be installed in the next step and can be cached when the image is build again.
COPY package.json .
# Installs all the dependencies.
RUN npm install
# This will copy all the codes to from the root folder of the project to the root folder of the image (app folder)
COPY . .
# Port number to use in Docker Container
EXPOSE 8800
# CMD will only run after the image is build and running.
CMD [ "npm", "run", "dev" ]