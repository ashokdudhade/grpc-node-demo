// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var helloworld_pb = require('./helloworld_pb.js');

function serialize_helloworld_HelloWorldRequest(arg) {
  if (!(arg instanceof helloworld_pb.HelloWorldRequest)) {
    throw new Error('Expected argument of type helloworld.HelloWorldRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_helloworld_HelloWorldRequest(buffer_arg) {
  return helloworld_pb.HelloWorldRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_helloworld_HelloWorldResponse(arg) {
  if (!(arg instanceof helloworld_pb.HelloWorldResponse)) {
    throw new Error('Expected argument of type helloworld.HelloWorldResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_helloworld_HelloWorldResponse(buffer_arg) {
  return helloworld_pb.HelloWorldResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var HelloWorldService = exports.HelloWorldService = {
  hello: {
    path: '/helloworld.HelloWorld/hello',
    requestStream: false,
    responseStream: false,
    requestType: helloworld_pb.HelloWorldRequest,
    responseType: helloworld_pb.HelloWorldResponse,
    requestSerialize: serialize_helloworld_HelloWorldRequest,
    requestDeserialize: deserialize_helloworld_HelloWorldRequest,
    responseSerialize: serialize_helloworld_HelloWorldResponse,
    responseDeserialize: deserialize_helloworld_HelloWorldResponse,
  },
};

exports.HelloWorldClient = grpc.makeGenericClientConstructor(HelloWorldService);
