# Rest to gRPC nodejs demo


## gRPC Server

docker run -i -p 8080:8080 relevantprogrammer/grpc-server:1.0.0


## Rest endpoint

```
docker run -i -p 3000:3000 -e GRPC_ENDPOINT=<<grpc-server-ip>>:8080 relevantprogrammer/rest-grpc:1.0.0
```

## Testing

curl http://localhost:3000/grpc-hello?name=World