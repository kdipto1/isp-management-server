"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InternetPackageRoutes = void 0;
const express_1 = __importDefault(require("express"));
const internetPackage_controller_1 = require("./internetPackage.controller");
const auth_1 = __importDefault(require("../../middlewares/auth"));
const user_1 = require("../../../enums/user");
const router = express_1.default.Router();
router.post('/', (0, auth_1.default)(user_1.ENUM_USER_ROLE.SUPER_ADMIN, user_1.ENUM_USER_ROLE.ADMIN), internetPackage_controller_1.InternetPackageController.create);
router.get('/', internetPackage_controller_1.InternetPackageController.getAllOrFilter);
router.get('/:id', internetPackage_controller_1.InternetPackageController.getById);
router.patch('/:id', internetPackage_controller_1.InternetPackageController.updateById);
router.delete('/:id', (0, auth_1.default)(user_1.ENUM_USER_ROLE.SUPER_ADMIN, user_1.ENUM_USER_ROLE.ADMIN), internetPackage_controller_1.InternetPackageController.deleteById);
exports.InternetPackageRoutes = router;
