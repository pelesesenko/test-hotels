import 'dotenv/config';
import express from 'express';
import router from './router.js';
import config from './config.js';

const PORT = config.PORT;

const server = express();

server.use(express.static('static'));
server.use(express.json());
server.use(router);

server.listen(PORT, () => console.log('server started on port ' + PORT));
