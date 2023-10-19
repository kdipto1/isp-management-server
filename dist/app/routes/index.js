"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_routes_1 = require("../modules/auth/auth.routes");
const user_routes_1 = require("../modules/user/user.routes");
const internetPackage_routes_1 = require("../modules/internetPackage/internetPackage.routes");
const newConnectionReq_routes_1 = require("../modules/newConnectionReq/newConnectionReq.routes");
const customerConnectionStatus_routes_1 = require("../modules/customerConnectionStatus/customerConnectionStatus.routes");
const payment_routes_1 = require("../modules/payment/payment.routes");
const review_routes_1 = require("../modules/review/review.routes");
const notification_routes_1 = require("../modules/notification/notification.routes");
const blog_routes_1 = require("../modules/blog/blog.routes");
const router = express_1.default.Router();
const moduleRoutes = [
    {
        path: '/auth',
        route: auth_routes_1.AuthRoutes,
    },
    {
        path: '/users',
        route: user_routes_1.UserRoutes,
    },
    {
        path: '/packages',
        route: internetPackage_routes_1.InternetPackageRoutes,
    },
    {
        path: '/new-connection-request',
        route: newConnectionReq_routes_1.NewConnectionReqRoutes,
    },
    {
        path: '/customer-connection-status',
        route: customerConnectionStatus_routes_1.CustomerConnectionStatusRoutes,
    },
    {
        path: '/customer-payments',
        route: payment_routes_1.PaymentRoutes,
    },
    {
        path: '/customer-reviews',
        route: review_routes_1.ReviewRoutes,
    },
    {
        path: '/notifications',
        route: notification_routes_1.NotificationRoutes,
    },
    {
        path: '/blogs',
        route: blog_routes_1.BlogRoutes,
    },
];
moduleRoutes.forEach(route => router.use(route.path, route.route));
exports.default = router;
