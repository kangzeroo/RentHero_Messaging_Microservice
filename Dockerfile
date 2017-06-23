FROM nodesource/trusty:6.3.1

ADD package.json package.json
RUN npm install
RUN npm install -g pouchdb-server
ADD . .

EXPOSE 5984
CMD ["npm", "run", "dev"]
