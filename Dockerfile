FROM node:latest

RUN apt-get update && apt-get install -y curl git postgresql-client nmap vim

WORKDIR /demo
RUN git clone https://github.com/buck/pgtest.git

WORKDIR /demo/pgtest
RUN npm install

ENTRYPOINT ["node", "index.js"]
