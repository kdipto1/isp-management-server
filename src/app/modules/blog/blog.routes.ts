import express from 'express';
import { BlogController } from './blog.controller';

const router = express.Router();

router.post('/', BlogController.create);
router.get('/', BlogController.getAllOrFilter);
router.get('/:id', BlogController.getById);
router.patch('/:id', BlogController.updateById);
router.delete('/:id', BlogController.deleteById);

export const BlogRoutes = router;
