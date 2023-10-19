"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NewConnectionReqRoutes = void 0;
const express_1 = __importDefault(require("express"));
const newConnectionReq_controller_1 = require("./newConnectionReq.controller");
const router = express_1.default.Router();
router.post('/', newConnectionReq_controller_1.NewConnectionReqController.create);
router.get('/', newConnectionReq_controller_1.NewConnectionReqController.getAllOrFilter);
router.get('/:id', newConnectionReq_controller_1.NewConnectionReqController.getById);
router.patch('/:id', newConnectionReq_controller_1.NewConnectionReqController.updateById);
router.delete('/:id', newConnectionReq_controller_1.NewConnectionReqController.deleteById);
exports.NewConnectionReqRoutes = router;
