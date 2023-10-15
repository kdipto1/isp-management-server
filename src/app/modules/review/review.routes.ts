import express from 'express';
import { ReviewController } from './review.controller';

const router = express.Router();

router.post('/', ReviewController.create);
router.get('/', ReviewController.getAllOrFilter);
router.get('/:id', ReviewController.getById);
router.patch('/:id', ReviewController.updateById);
router.delete('/:id', ReviewController.deleteById);

export const ReviewRoutes = router;
