import createUser from './createUser.js';
import deleteUser from './deleteUser.js';
import getUser from './getUser.js';
import getUsers from './getUsers.js';
import updateUser from './updateUser.js';
import {parseUrl, getJsonError} from '../utils.js';

const handlers = {
  GET: getUsers,
  GET_id: getUser,
  POST: createUser,
  PUT: updateUser,
  DELETE: deleteUser,
};

export default (req, res) => {
  const path = parseUrl(req.url).pathname;
  const method = req.method;
  const tail = method === 'GET' && Boolean(path.split('/')[2]) ? '_id' : '';
  const handler = handlers[method + tail];

  if (handler) handler(req, res);
  else {
    res.writeHead(404);
    res.end(getJsonError('Route not found in users'));
  }
};
