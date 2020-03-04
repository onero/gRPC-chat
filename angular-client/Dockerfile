FROM node:12-slim AS builder

WORKDIR /app

COPY . .

RUN npm i
RUN npm run build --prod

FROM nginx:alpine
COPY --from=builder /app/dist/* /usr/share/nginx/html/
