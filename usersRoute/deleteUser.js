import db from '../db.js';
import {getJsonError} from '../utils.js';

export default (req, res) => {
  const id = parseInt(req.url.split('/')[2]);
  const success = db.deleteUser(id);

  res.writeHead(success ? 204 : 404);
  if (success) {
    res.end();
  } else {
    res.end(getJsonError('User not found'));
  }
};
