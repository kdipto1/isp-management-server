import express from 'express';
import { InternetPackageController } from './internetPackage.controller';
import auth from '../../middlewares/auth';
import { ENUM_USER_ROLE } from '../../../enums/user';

const router = express.Router();

router.post(
  '/',
  auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  InternetPackageController.create,
);
router.get('/', InternetPackageController.getAllOrFilter);
router.get('/:id', InternetPackageController.getById);
router.patch('/:id', InternetPackageController.updateById);
router.delete(
  '/:id',
  auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  InternetPackageController.deleteById,
);

export const InternetPackageRoutes = router;
