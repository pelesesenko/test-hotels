import db from '../db.js';

export default (req, res) => {
  let body = '';
  req.on('data', (chunk) => {
    body += chunk;
  });
  req.on('end', async () => {
    const data = JSON.parse(body);
    const id = parseInt(req.url.split('/')[2]);
    const user = await db.updateUser(id, data);

    res.writeHead(user ? 200 : 404);
    res.end(JSON.stringify(user ?? {message: 'User not found'}));
  });
};
