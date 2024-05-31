import express from 'express';
import router from './router.js';

const PORT = 3000;

const server = express();

server.use(express.static('static'));
server.use(express.json());
server.use(router);

server.listen(PORT, () => console.log('server started on port ' + PORT));
