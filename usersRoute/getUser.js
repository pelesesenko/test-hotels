import db from '../db.js';

export default (req, res) => {
  const id = parseInt(req.url.split('/')[2]);
  const user = db.getUserById(id);

  res.writeHead(user ? 200 : 404);
  res.end(JSON.stringify(user ?? {message: 'User not found'}));
};
