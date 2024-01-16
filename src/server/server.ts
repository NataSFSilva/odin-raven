import  express from "express";

const server = express();

server.get('/', (req, res) => {
    return res.send("olá, dev!");
});
// server.post('');
// server.put('');
// server.delete ('');

export { server };