import createUser from './createUser.js';
import deleteUser from './deleteUser.js';
import getUser from './getUser.js';
import getUsers from './getUsers.js';
import updateUser from './updateUser.js';
import Router from 'express';

const userRouter = new Router();

userRouter.get('/', getUsers);
userRouter.get('/:id', getUser);
userRouter.post('/', createUser);
userRouter.put('/:id', updateUser);
userRouter.delete('/:id', deleteUser);

export default userRouter;
