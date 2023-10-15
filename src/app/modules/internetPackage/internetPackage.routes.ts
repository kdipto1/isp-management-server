import express from 'express';
import { InternetPackageController } from './internetPackage.controller';

const router = express.Router();

router.post('/', InternetPackageController.create);
router.get('/', InternetPackageController.getAllOrFilter);
router.get('/:id', InternetPackageController.getById);
router.patch('/:id', InternetPackageController.updateById);
router.delete('/:id', InternetPackageController.deleteById);

export const InternetPackageRoutes = router;
