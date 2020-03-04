#Stage 1 - Create cached node_modules.
# Only rebuild layer if package.json has changed
FROM node:12-slim as node_cache
WORKDIR /cache/
COPY package.json .
RUN npm install

# Run
FROM node:12-slim
WORKDIR /app
COPY --from=node_cache /cache/ .
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "run", "start:prod"]
