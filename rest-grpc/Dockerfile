FROM node:16.13

COPY . /project
WORKDIR /project
RUN npm install
ENTRYPOINT ["./docker-entrypoint.sh"]
