const expreess = require('express');
const aktorlerRouter = require('./routers/aktorRouter');
const logger = require('./middlewares/logger');
const errorH = require('./middlewares/error');

const server = expreess();
server.use(expreess.json());
server.use('/aktorler',aktorlerRouter);
server.use(logger);

server.get("/", (req,res)=> {
    res.send("express projesi");
}
);
server.use(errorH);
server.listen(5000, () =>{
    console.log("is runing...")
});