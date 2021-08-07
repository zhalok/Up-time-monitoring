const http = require("http");
const handler = require("./helpers/reqhandler");

const app = {}
app.config = {
    port: 3000,
}

app.ReqResHandler = handler;



app.createServer = () => {
    const server = http.createServer(app.ReqResHandler);
    server.listen(app.config.port);
    console.log("server is on");
    console.log(process.env.HELLO);
}



app.createServer();