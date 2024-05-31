import userRouter from './usersRouter/usersRouter.js';
import Router from 'express';

const router = new Router();

router.use('/users', userRouter);

export default router;
