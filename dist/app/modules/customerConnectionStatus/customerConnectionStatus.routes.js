"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerConnectionStatusRoutes = void 0;
const express_1 = __importDefault(require("express"));
const customerConnectionStatus_controller_1 = require("./customerConnectionStatus.controller");
const router = express_1.default.Router();
router.post('/', customerConnectionStatus_controller_1.CustomerConnectionStatusController.create);
router.get('/', customerConnectionStatus_controller_1.CustomerConnectionStatusController.getAllOrFilter);
router.get('/:id', customerConnectionStatus_controller_1.CustomerConnectionStatusController.getById);
router.patch('/:id', customerConnectionStatus_controller_1.CustomerConnectionStatusController.updateById);
router.delete('/:id', customerConnectionStatus_controller_1.CustomerConnectionStatusController.deleteById);
exports.CustomerConnectionStatusRoutes = router;
