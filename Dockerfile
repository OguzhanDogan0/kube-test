FROM node:10.15.2-alpine AS appbuild
WORKDIR /usr/src/app
COPY package.json ./
COPY . ./
RUN npm install
COPY . ./
RUN npm build
# Build Stage 2


FROM node:10.15.2-alpine
WORKDIR /usr/src/app
COPY package.json ./
COPY . ./
RUN npm install
COPY . ./
EXPOSE 9000
CMD [ "node", ".js" ]
