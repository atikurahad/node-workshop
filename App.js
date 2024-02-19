// // // request response in node js

// // //  const http = require('http')

// // //  const server = http.createServer((req,res)=>{
// // // if(req.url == '/'){
// // //   res.writeHead(200,{'content-type':'text/html'} )
// // //   res.write('<h1> I am from Home</h1>')
// // //   res.end()
// // // }
// // //   else if (req.url == '/about'){
// // //     res.writeHead(200,{'content-type':'text/html'} )
// // //     res.write('<h1> I am from About</h1>')
// // //     res.end()
// // //   }
// // //   else if (req.url == '/contact'){
// // //     res.writeHead(200,{'content-type':'text/html'} )
// // //     res.write('<h1> I am from Contact</h1>')
// // //     res.end()
// // //   }

// // //   else{
// // //     res.writeHead(404,{'content-type':'text/html'} )
// // //     res.write('<h1> 404 not found</h1>')
// // //     res.end()
// // //   }

// // //  })

// // //  server.listen(5050)
// // //  console.log("Server is running on port 5050")

// // // for showing html page

// // // const server = HTTP.createServer((req, res) => {

// // //    if ((req.url = "/contact")) {
// // //     fs.readFile('Contact.html', function (error, data) {

// // //       res.writeHead(200,{"content-type":'text/html'})
// // //       res.write(data);
// // //       res.end();
// // //     });
// // //   }

// // //   else if ((req.url = "/")) {
// // //     fs.readFile("Home.html", function (error, data) {
// // //     res.writeHead(200, { "content-type": "text/html" });
// // //     res.write(data);
// // //     res.end();
// // //   });
// // // }

// // // });

// // // server.listen(5050);
// // // console.log("Server run success");

// // const fs = require("fs");

// // const HTTP = require("http");

// // const Server = HTTP.createServer((req, res) => {
// //   if ((req.url = "/")) {
// //     let data = fs.readFileSync("home.html", "utf8");

// //     res.end(data);
// //   } else if ((req.url = "/contact")) {
// //     let data = fs.readFileSync("contact.html", "utf8");

// //     res.end(data);
// //   } else if ((req.url = "/user")) {
// //     let data = fs.readFileSync("user.html", "utf8");

// //     res.end(data);
// //   } else if ((req.url = "/terms")) {
// //     let data = fs.readFileSync("term.html", "utf8");

// //     res.end(data);
// //   } else return "404 not found";
// // });

// // Server.listen(4040);
// // console.log("Run success .... on port 4040");

// var fs = require("fs");
// var http = require("http");
// var server = http.createServer(function (req, res) {
//   if (req.url == "/") {
//     let data = fs.readFileSync("home.html", "utf8");
//     res.end(data);
//   } else if (req.url == "/Contact") {
//     let data = fs.readFileSync("contact.html", "utf8");
//     res.end(data);
//   } else if (req.url == "/About") {
//     let data = fs.readFileSync("about.html", "utf8");
//     res.end(data);
//   } else if (req.url == "/Terms") {
//     let data = fs.readFileSync("terms.html", "utf8");
//     res.end(data);
//   }
// });
// server.listen(8080);
// console.log("Server Run Success");
