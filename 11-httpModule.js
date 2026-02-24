const http = require("http");
const server= http.createServer((req,res)=>{
    if(req.url === '/'){
     res.write('welcome to our home page')
     res.end()
    }
    if (req.url === '/about'){
        res.write('welcome to our about page')
        res.end()
    }
    res.end(`
        <h1>oops!</h1>
        <p>we cant seem to find the page you are looking for</p>
        <a href="/">back home</a>`)

})
server.listen(5000)