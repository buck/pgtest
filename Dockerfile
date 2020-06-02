FROM node:latest

RUN apt-get update && apt-get install -y curl git postgresql-client nmap vim

WORKDIR /demo
RUN git clone https://github.com/buck/devopsfordocker-exercise1.15.git

WORKDIR /demo/devopsfordocker-exercise1.15
RUN npm install

ENTRYPOINT ["node", "index.js"]
