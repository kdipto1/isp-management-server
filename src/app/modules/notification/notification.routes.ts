import express from 'express';
import { NotificationController } from './notification.controller';

const router = express.Router();

router.post('/', NotificationController.create);
router.get('/', NotificationController.getAllOrFilter);
router.get('/:id', NotificationController.getById);
router.patch('/:id', NotificationController.updateById);
router.delete('/:id', NotificationController.deleteById);

export const NotificationRoutes = router;
