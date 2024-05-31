import db from '../db.js';
import {getJsonError} from '../utils.js';

export default async (req, res) => {
  const data = req.body;

  if (!data.name || !data.age) {
    res.status(400).json(getJsonError('Name and age are required'));
  } else {
    const user = await db.addUser(data);
    const status = user ? 201 : 500;
    res.status(status).json(user);
  }
};
