import express from 'express';
import { AuthRoutes } from '../modules/auth/auth.routes';
import { UserRoutes } from '../modules/user/user.routes';
import { InternetPackageRoutes } from '../modules/internetPackage/internetPackage.routes';
import { NewConnectionReqRoutes } from '../modules/newConnectionReq/newConnectionReq.routes';
import { CustomerConnectionStatusRoutes } from '../modules/customerConnectionStatus/customerConnectionStatus.routes';
import { PaymentRoutes } from '../modules/payment/payment.routes';
import { ReviewRoutes } from '../modules/review/review.routes';
import { NotificationRoutes } from '../modules/notification/notification.routes';
import { BlogRoutes } from '../modules/blog/blog.routes';

const router = express.Router();

const moduleRoutes = [
  {
    path: '/auth',
    route: AuthRoutes,
  },
  {
    path: '/users',
    route: UserRoutes,
  },
  {
    path: '/packages',
    route: InternetPackageRoutes,
  },
  {
    path: '/new-connection-request',
    route: NewConnectionReqRoutes,
  },
  {
    path: '/customer-connection-status',
    route: CustomerConnectionStatusRoutes,
  },
  {
    path: '/customer-payments',
    route: PaymentRoutes,
  },
  {
    path: '/customer-reviews',
    route: ReviewRoutes,
  },
  {
    path: '/notifications',
    route: NotificationRoutes,
  },
  {
    path: '/blogs',
    route: BlogRoutes,
  },
];

moduleRoutes.forEach(route => router.use(route.path, route.route));

export default router;
