import db from '../db.js';

export default (req, res) => {
  let body = '';
  req.on('data', (chunk) => {
    body += chunk;
  });
  req.on('end', () => {
    const data = JSON.parse(body);
    const id = parseInt(req.url.split('/')[2]);
    const user = db.updateUser(id, data);

    res.writeHead(user ? 200 : 404);
    res.end(JSON.stringify(user ?? {message: 'User not found'}));
  });
};
