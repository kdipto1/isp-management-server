"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentRoutes = void 0;
const express_1 = __importDefault(require("express"));
const payment_controller_1 = require("./payment.controller");
const router = express_1.default.Router();
router.post('/', payment_controller_1.PaymentController.create);
router.get('/', payment_controller_1.PaymentController.getAllOrFilter);
router.get('/:id', payment_controller_1.PaymentController.getById);
router.patch('/:id', payment_controller_1.PaymentController.updateById);
router.delete('/:id', payment_controller_1.PaymentController.deleteById);
exports.PaymentRoutes = router;
