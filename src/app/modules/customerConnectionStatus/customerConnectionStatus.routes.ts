import express from 'express';
import { CustomerConnectionStatusController } from './customerConnectionStatus.controller';

const router = express.Router();

router.post('/', CustomerConnectionStatusController.create);
router.get('/', CustomerConnectionStatusController.getAllOrFilter);
router.get('/:id', CustomerConnectionStatusController.getById);
router.patch('/:id', CustomerConnectionStatusController.updateById);
router.delete('/:id', CustomerConnectionStatusController.deleteById);

export const CustomerConnectionStatusRoutes = router;
