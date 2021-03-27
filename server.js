'use strict';

const matcher = require('./matcher');

const express = require('express');
const bodyparser = require('body-parser');
const fetch = require('node-fetch');

const config = require('./config');
const FBeamer = require('./fbeamer');

const server = express();
const PORT = process.env.PORT || 3000;

let country = [];

const f = new FBeamer(config.FB);
console.log(f);
server.post('/', bodyparser.json({
  verify: f.verifySignature.call(f)
}));

server.post('/', (req, res) => {
  return f.incoming(req, res, async data => {
    data = f.messageHandler(data);
    console.log(data);
    try {
      if (typeof data.content == "string") {
      	respond(data)
        }
    } catch (e) {
      console.log(e);
    }
  });
});

async function respond(data, reply) {
	//here we get the message of the user and we can call our regex to get the intent
	//await f.txt(data.sender, 'message received!');
	//await f.img(data.sender, 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg');
  //console.log(data)
  if(country.length >= 3) {
    country = [];
  }
  matcher(data.content, country, cb => {
    f.txt(data.sender, cb.intent);
    if(cb.country != null) {
      data.content = cb.country;
      country.push(data.content);
      console.log(country);
    }
  })
  if(country.length == 3){
    await postData(country, data.sender);
  }
  //await postData(data.content)
}



async function postData(input, id){
  console.log(input)
  var entry = {
    "intent": input
  }
  console.log(entry)
  await fetch('http://localhost:5000/recomandation', {
    method: "POST",
    credentials: "include",
    body: JSON.stringify(entry),
    cache: "no-cache",
    headers: {
      Accept: "application/json"
    }
  })
  .then(function (response) {
    response.json().then(function(data) {
      f.txt(id, "Your dream destination is : " + data.message)
      console.log(data);
    })
  }).catch((error) => {
    console.log(error);
  })
}

server.get('/', (req, res) => f.registerHook(req, res));
server.listen(PORT, () =>
  console.log(`The bot server is running on port ${PORT}`));