
const http = require('http')

const server = http.createServer(  function(req,res){
    res.end("hello nodeJs")
}

)
server.listen(5050)
console.log("server is listening on port 5050")