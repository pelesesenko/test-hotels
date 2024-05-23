import db from '../db.js';

export default async (req, res) => {
  res.writeHead(200);
  res.end(JSON.stringify(await db.getUsers()));
};
