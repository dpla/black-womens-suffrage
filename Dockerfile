
FROM node:22-alpine
WORKDIR /opt/black-womens-suffrage
COPY . /opt/black-womens-suffrage
RUN npm install
RUN --mount=type=secret,id=sentry_auth \
    SENTRY_AUTH_TOKEN=$(cat /run/secrets/sentry_auth 2>/dev/null || true) \
    npm run build
EXPOSE 3000

CMD ["npm", "run", "start"]
