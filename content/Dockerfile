FROM node:10

ADD . /code
WORKDIR /code
RUN npm install

EXPOSE 8080
CMD [ "node", "index.js" ]