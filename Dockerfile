FROM node:23-alpine3.20

WORKDIR /app

COPY package.json pnpm-lock.yaml ./

RUN npm i -g pnpm && pnpm install --verbose

ENV PORT=4000

EXPOSE 4000

COPY . .

CMD ["pnpm", "dev"]
