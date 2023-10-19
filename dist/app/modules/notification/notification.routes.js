"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationRoutes = void 0;
const express_1 = __importDefault(require("express"));
const notification_controller_1 = require("./notification.controller");
const router = express_1.default.Router();
router.post('/', notification_controller_1.NotificationController.create);
router.get('/', notification_controller_1.NotificationController.getAllOrFilter);
router.get('/:id', notification_controller_1.NotificationController.getById);
router.patch('/:id', notification_controller_1.NotificationController.updateById);
router.delete('/:id', notification_controller_1.NotificationController.deleteById);
exports.NotificationRoutes = router;
