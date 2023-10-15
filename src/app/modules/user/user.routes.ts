import express from 'express';
import { UserController } from './user.controller';

const router = express.Router();

router.get('/', UserController.getAllOrFilter);
router.get('/:id', UserController.getById);
router.patch('/:id', UserController.updateById);

export const UserRoutes = router;
