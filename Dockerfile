FROM node:14.17.1

LABEL email="withjuwon@gmail.com"
LABEL name="nodejs boilerplate"
LABEL version="0.1.0"
LABEL description="node js boilerplate with nginx and docker"

WORKDIR /usr/src/app/node

COPY package*.json ./
RUN npm install yarn && \
    yarn install

COPY . .

EXPOSE 8000

RUN yarn build

CMD [ "yarn", "start" ]
