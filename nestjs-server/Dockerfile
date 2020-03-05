# Node cache for faster builds
FROM node:12-alpine as builder
WORKDIR /cache
# Prepare for package installation
COPY ./package.json .
# Cleanup dev dependencies
RUN npm i --production

FROM node:12-alpine
WORKDIR /app
# Ensure production files gets copies
COPY . .
# Copy from builder
COPY --from=builder ./cache/node_modules ./node_modules
# Expose backend incoming port
EXPOSE 3000
# Define run command, which fires when container starts
CMD ["node", "./dist/main.js"]
