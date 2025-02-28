FROM node:23-alpine3.20

WORKDIR /app

COPY package.json pnpm-lock.yaml ./

RUN npm i -g pnpm && pnpm i --verbose

ENV PORT=$PORT

EXPOSE $PORT

COPY . .

CMD ["pnpm", "start"]
