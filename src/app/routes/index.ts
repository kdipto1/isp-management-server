import express from 'express';
import { AuthRoutes } from '../modules/auth/auth.routes';
import { UserRoutes } from '../modules/user/user.routes';
import { InternetPackageRoutes } from '../modules/internetPackage/internetPackage.routes';
import { NewConnectionReqRoutes } from '../modules/newConnectionReq/newConnectionReq.routes';
import { CustomerConnectionStatusRoutes } from '../modules/customerConnectionStatus/customerConnectionStatus.routes';
import { PaymentRoutes } from '../modules/payment/payment.routes';
import { ReviewRoutes } from '../modules/review/review.routes';
import { NotificationRoutes } from '../modules/notification/notification.routes';

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
  {
    path: '/new-connection-request',
    route: NewConnectionReqRoutes,
  },
  {
    path: '/customer-connection-status',
    route: CustomerConnectionStatusRoutes,
  },
  {
    path: '/customer-payment',
    route: PaymentRoutes,
  },
  {
    path: '/customer-review',
    route: ReviewRoutes,
  },
  {
    path: '/notification',
    route: NotificationRoutes,
  },
];

moduleRoutes.forEach(route => router.use(route.path, route.route));

export default router;
