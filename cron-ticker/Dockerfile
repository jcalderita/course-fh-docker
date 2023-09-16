FROM node:20.6.1-alpine3.18 as deps
RUN npm install -g pnpm
WORKDIR /app
COPY package.json ./
RUN pnpm install

FROM node:20.6.1-alpine3.18 as builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN pnpm run test

FROM node:20.6.1-alpine3.18 as prod-deps
RUN npm install -g pnpm
WORKDIR /app
COPY package.json ./
RUN pnpm install --prod

FROM node:20.6.1-alpine3.18 as runner
WORKDIR /app
COPY --from=prod-deps /app/node_modules ./node_modules
COPY app.js ./
COPY tasks/ ./tasks
CMD ["node", "app.js"]