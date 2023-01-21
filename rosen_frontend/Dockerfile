FROM node:latest

WORKDIR /src

COPY rosen_frontend/package.json .
COPY rosen_frontend/package-lock.json .

RUN npm ci

COPY rosen_frontend/ .

EXPOSE 3000

RUN npm run build

CMD ["npm", "run", "start"]