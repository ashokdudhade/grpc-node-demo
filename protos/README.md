#  Protos


Client
```
grpc_tools_node_protoc --js_out=import_style=commonjs,binary:../rest-grpc/static_codegen/ --grpc_out=grpc_js:../rest-grpc/static_codegen helloworld.proto
```

Server
```
grpc_tools_node_protoc --js_out=import_style=commonjs,binary:../grpc-server/static_codegen/ --grpc_out=grpc_js:../grpc-server/static_codegen helloworld.proto
```