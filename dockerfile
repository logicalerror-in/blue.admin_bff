FROM node:22.21.1-bookworm-slim AS build

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

COPY . .
RUN npm run build
RUN npm prune --omit=dev

FROM node:22.21.1-bookworm-slim AS runtime

ENV NODE_ENV=production
ENV ADMIN_BFF_PORT=12000

WORKDIR /app

COPY --from=build /app/package.json /app/package-lock.json ./
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/dist ./dist

EXPOSE 12000

CMD ["node", "dist/main.js"]