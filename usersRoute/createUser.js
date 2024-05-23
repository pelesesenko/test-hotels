import db from '../db.js';
import {getJsonError} from '../utils.js';

export default (req, res) => {
  let body = '';
  req.on('data', (chunk) => {
    body += chunk;
  });
  req.on('end', async () => {
    const data = JSON.parse(body);

    if (!data.name || !data.age) {
      res.writeHead(400);
      res.end(getJsonError('Name and age are required'));
    } else {
      const newUser = await db.addUser(data);
      res.writeHead(201);
      res.end(JSON.stringify(newUser));
    }
  });
};
