import express from 'express';
import { ReviewController } from './review.controller';
import auth from '../../middlewares/auth';
import { ENUM_USER_ROLE } from '../../../enums/user';

const router = express.Router();

router.post('/', auth(ENUM_USER_ROLE.USER), ReviewController.create);
router.get('/', ReviewController.getAllOrFilter);
router.get('/:id', ReviewController.getById);
router.patch('/:id', ReviewController.updateById);
router.delete('/:id', ReviewController.deleteById);

export const ReviewRoutes = router;
