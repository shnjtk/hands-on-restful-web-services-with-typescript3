FROM node:10

ENV NODE_ENV production

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY . .

RUN npm install -g typescript
RUN npm install
RUN npm install --only=dev

EXPOSE 3000

CMD ["npm", "run", "prod"]