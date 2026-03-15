
FROM node:20-alpine
WORKDIR /opt/black-womens-suffrage 
COPY . /opt/black-womens-suffrage 
RUN npm install
RUN NODE_OPTIONS=--openssl-legacy-provider npm run build
EXPOSE 3000

CMD ["npm", "run", "start"]