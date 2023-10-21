const http = require("http");
// this is a mandatory in line not changes in sequence of req,res,next;
// http.createServer((request, reaponse, next)=>{

// //    request.parmas;
//   //requiest.url;

// });
const fs = require("fs");



const PORT = 3000;
const hostname = "localhost";
const home = fs.readFileSync("./index.html","utf-8");
const server = http.createServer((req, res)=>{
    if(req.url=="/"){
      return  res.end("<h1>kidhar ko aa gya re baba</h1>");
    }

    if(req.url==="/about"){
      return  res.end("<h1>ruko jara sabar karo</h1>");
    }
    if(req.url==="/home"){
       return res.end(home);
    }
    if(req.url==="/contact"){
      return  res.end("<h1>mere muhh se nikal gya </h1>");        
    }
    if(req.url==="/service"){
       return res.end("<h1>berojgari enjoy krna</h1>");
    }
    else{
       return res.end("<h1>404 page not found</h1>");
    }
});

    server.listen(PORT,hostname,()=>{
        console.log(`server is working on http://${hostname}:${PORT}`);
    });