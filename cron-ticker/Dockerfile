FROM --platform=$BUILDPLATFORM node:20.6.1-alpine3.18
RUN npm install -g pnpm
WORKDIR /app
COPY package.json ./
RUN pnpm install
COPY . ./
RUN pnpm run test
RUN rm -rf tests && rm -rf node_modules && rm -rf tasks
RUN pnpm install --prod
CMD ["node", "app.js"]