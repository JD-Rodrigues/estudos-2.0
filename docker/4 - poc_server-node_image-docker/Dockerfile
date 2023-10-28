FROM node

RUN mkdir usr/src/server

WORKDIR /usr/src/server

COPY package.json package-lock.json src /usr/src/server

EXPOSE 8001

RUN npm install

CMD ["npm", "start"]
