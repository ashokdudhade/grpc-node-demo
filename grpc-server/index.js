var messages = require('./static_codegen/helloworld_pb');
var services = require('./static_codegen/helloworld_grpc_pb');

var grpc = require('@grpc/grpc-js');


function hello(call, callback) {
  var reply = new messages.HelloWorldResponse();
  reply.setMessage('Hello ' + call.request.getName()+'!');
  callback(null, reply);
}


function main() {
  var server = new grpc.Server();
  server.addService(services.HelloWorldService, {hello: hello});
  server.bindAsync('0.0.0.0:8080', grpc.ServerCredentials.createInsecure(), () => {
    server.start();
    console.log("Started on port 8080")
  });
}

main();