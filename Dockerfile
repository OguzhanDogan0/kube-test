
FROM node:14-slim As development

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install --only=development

COPY . .

FROM node:14-slim As production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install --only=production

COPY . .

COPY --from=development /usr/src/app/ ./

CMD ["npm", "run", "start"]
