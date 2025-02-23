FROM node:22.13.0-alpine
WORKDIR /app
COPY . .
RUN yarn
EXPOSE 3000
CMD ["yarn", "dev"]