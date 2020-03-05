FROM node:12-alpine AS builder
WORKDIR /app
# Copy application
COPY . .
# Install only dependencies needed to build for production
RUN npm i --production
RUN npm run build --prod

FROM nginx:alpine
COPY --from=builder /app/dist/* /usr/share/nginx/html/
