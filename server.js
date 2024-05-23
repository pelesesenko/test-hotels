import {createServer} from 'node:http';
import router from './router.js';

const server = createServer(router);

server.listen(3000, () => console.log('server starts'));
