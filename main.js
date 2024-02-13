// request response in node js

 const http = require('http')

 const server = http.createServer((req,res)=>{
if(req.url == '/'){
  res.writeHead(200,{'content-type':'text/html'} )
  res.write('<h1> I am from Home</h1>')
  res.end()
}
  else if (req.url == '/about'){
    res.writeHead(200,{'content-type':'text/html'} )
    res.write('<h1> I am from About</h1>')
    res.end()
  }
  else if (req.url == '/contact'){
    res.writeHead(200,{'content-type':'text/html'} )
    res.write('<h1> I am from Contact</h1>')
    res.end()
  }

  else{
    res.writeHead(404,{'content-type':'text/html'} )
    res.write('<h1> 404 not found</h1>')
    res.end()
  }

 })

 server.listen(5050)
 console.log("Server is running on port 5050")