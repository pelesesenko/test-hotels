import userRoute from './usersRoute/usersRoute.js';
import {parseUrl, getJsonError} from './utils.js';

export default (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  const path = parseUrl(req.url).pathname;
  if (path.startsWith('/users')) userRoute(req, res);
  else {
    res.writeHead(404);
    res.end(getJsonError('Route not found'));
  }
};
