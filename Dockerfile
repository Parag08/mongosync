FROM node:12-alpine

RUN mkdir -p /app
WORKDIR /app
ADD package.json package-lock.json /app/
RUN npm install
COPY . /app/

EXPOSE 6000

CMD ["npm","start"]