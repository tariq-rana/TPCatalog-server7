#MSSQL_HOST=192.168.99.1
# nest build 

# docker build . -t node-alpine
# docker run  -p 3001:3001 --name tpcatalog-server7  node-alpine

FROM node:12.16.2-alpine3.11
WORKDIR /app
COPY package.json /app
COPY dist /app
RUN npm install
CMD ["node", "main.js"]
EXPOSE 3001
