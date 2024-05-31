import db from '../db.js';

export default async (req, res) => {
  const success = await db.deleteUser(parseInt(req.params.id));
  const status = success ? 204 : 404;

  res.sendStatus(status);
};
