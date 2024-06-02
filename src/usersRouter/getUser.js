import db from '../db.js';

export default async (req, res) => {
  const user = await db.getUserById(parseInt(req.params.id));
  if (!user) res.sendStatus(404);
  res.json(user);
};
