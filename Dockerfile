FROM node:lts-alpine AS build

WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build && echo "Build Successful"
EXPOSE 3000
CMD ["npm", "start"]