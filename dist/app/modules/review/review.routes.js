"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReviewRoutes = void 0;
const express_1 = __importDefault(require("express"));
const review_controller_1 = require("./review.controller");
const auth_1 = __importDefault(require("../../middlewares/auth"));
const user_1 = require("../../../enums/user");
const router = express_1.default.Router();
router.post('/', (0, auth_1.default)(user_1.ENUM_USER_ROLE.USER), review_controller_1.ReviewController.create);
router.get('/', review_controller_1.ReviewController.getAllOrFilter);
router.get('/:id', review_controller_1.ReviewController.getById);
router.patch('/:id', review_controller_1.ReviewController.updateById);
router.delete('/:id', review_controller_1.ReviewController.deleteById);
exports.ReviewRoutes = router;
