# Rest API to gRPC

docker build -t rest-grpc .
docker run -i -p 3000:3000 -e GRPC_ENDPOINT=0.0.0.0:8080 rest-grpc