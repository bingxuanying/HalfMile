FROM node:10

ADD . /code
WORKDIR /code
RUN npm install

EXPOSE 80
CMD [ "node", "index.js" ]