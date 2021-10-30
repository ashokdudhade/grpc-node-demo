const express = require('express')
const app = express()
const port = 3000
var parseArgs = require('minimist');
var messages = require('./static_codegen/helloworld_pb');
var services = require('./static_codegen/helloworld_grpc_pb');

var grpc = require('@grpc/grpc-js');

function main(res, name) {
  var argv = parseArgs(process.argv.slice(2), {
    string: 'target'
  });
  var target;
  if (argv.target) {
    target = argv.target;
  } else {
    target = 'localhost:8080';
  }
  if(process.env.GRPC_ENDPOINT){
    target=process.env.GRPC_ENDPOINT
  }
  var client = new services.HelloWorldClient(target,
                                          grpc.credentials.createInsecure());
  var request = new messages.HelloWorldRequest();
  var user;
  if (argv._.length > 0) {
    user = argv._[0]; 
  } else {
    user = 'world';
  }
  if(name){
    user = name
  }

  request.setName(user);
  client.hello(request, function(err, response) {
    if(err){
      console.error(err);
      res.status(500).send(err)
    }else{
      console.log('Hello:', response.getMessage());
      res.send('Hello World!>>>'+ response.getMessage())
    }
    
  });
}


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/grpc-hello', (req, res) => {
  try{
    main(res, req.query.name)
  }catch(e){
    console.error(e)
  }
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})