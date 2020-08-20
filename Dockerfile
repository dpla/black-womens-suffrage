
FROM node:erbium-alpine3.12
WORKDIR /opt/black-womens-suffrage 
COPY . /opt/black-womens-suffrage 
RUN npm install
RUN npm run build
EXPOSE 3000

CMD ["npm", "run", "start"]