import express from 'express';
import { PaymentController } from './payment.controller';

const router = express.Router();

router.post('/', PaymentController.create);
router.get('/', PaymentController.getAllOrFilter);
router.get('/:id', PaymentController.getById);
router.patch('/:id', PaymentController.updateById);
router.delete('/:id', PaymentController.deleteById);

export const PaymentRoutes = router;
