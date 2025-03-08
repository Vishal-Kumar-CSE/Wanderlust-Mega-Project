#Stage 1
FROM node:21 as backend-builder
#Setup the working dir
WORKDIR /app
#copy
COPY . .

#package install
RUN npm i

#stage 2
FROM node:21-slim 
#setup the working dir
WORKDIR /app
#copy from above stage
COPY --from=backend-builder /app .

COPY .env.docker .env

#port
EXPOSE 8080

CMD ["npm", "start"]
