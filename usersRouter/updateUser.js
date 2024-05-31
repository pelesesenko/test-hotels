import db from '../db.js';

export default async (req, res) => {
  const user = await db.updateUser(parseInt(req.params.id), req.body);
  const status = user ? 200 : 404;
  res.status(status).json(user);
};
