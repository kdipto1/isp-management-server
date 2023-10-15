import express from 'express';
import { NewConnectionReqController } from './newConnectionReq.controller';

const router = express.Router();

router.post('/', NewConnectionReqController.create);
router.get('/', NewConnectionReqController.getAllOrFilter);
router.get('/:id', NewConnectionReqController.getById);
router.patch('/:id', NewConnectionReqController.updateById);
router.delete('/:id', NewConnectionReqController.deleteById);

export const NewConnectionReqRoutes = router;
