import express from 'express';
import { AuthRoutes } from '../modules/auth/auth.routes';
import { UserRoutes } from '../modules/user/user.routes';
import { InternetPackageRoutes } from '../modules/internetPackage/internetPackage.routes';

const router = express.Router();

const moduleRoutes = [
  {
    path: '/auth',
    route: AuthRoutes,
  },
  {
    path: '/user',
    route: UserRoutes,
  },
  {
    path: '/packages',
    route: InternetPackageRoutes,
  },
];

moduleRoutes.forEach(route => router.use(route.path, route.route));

export default router;
