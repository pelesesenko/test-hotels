import db from '../db.js';

export default async (req, res) => {
  res.json(await db.getUsers());
};
