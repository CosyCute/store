# pull official base image
FROM node:latest

# set working directory
WORKDIR /home/ubuntu/zxc

# add `/app/node_modules/.bin` to $PATH
ENV PATH /home/ubuntu/zxc/node_modules/.bin:$PATH
ENV PORT 3000

# install app dependencies
COPY package.json ./
COPY package-lock.json ./
COPY --chown=node:node package.json .
RUN npm install --silent
RUN npm install react-scripts@3.4.1 -g --silent

# add app
COPY --chown=node:node . .
USER node

# start app
ENTRYPOINT ["npm", "start"]