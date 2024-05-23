import db from '../db.js';

export default (req, res) => {
  res.writeHead(200);
  res.end(JSON.stringify(db.getUsers()));
};
