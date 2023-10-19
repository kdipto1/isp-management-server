"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InternetPackageController = void 0;
const catchAsync_1 = __importDefault(require("../../../shared/catchAsync"));
const internetPackage_service_1 = require("./internetPackage.service");
const sendResponse_1 = __importDefault(require("../../../shared/sendResponse"));
const http_status_1 = __importDefault(require("http-status"));
const pick_1 = __importDefault(require("../../../shared/pick"));
const internetPackage_constants_1 = require("./internetPackage.constants");
const create = (0, catchAsync_1.default)(async (req, res) => {
    const result = await internetPackage_service_1.InternetPackageService.create(req.body);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Internet Packages Created Successfully!',
        data: result,
    });
});
const getAllOrFilter = (0, catchAsync_1.default)(async (req, res) => {
    const filters = (0, pick_1.default)(req.query, internetPackage_constants_1.PackageFilterAbleFields);
    const options = (0, pick_1.default)(req.query, ['page', 'limit', 'sortBy', 'sortOrder']);
    const result = await internetPackage_service_1.InternetPackageService.getAllOrFilter(filters, options);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Internet Packages Retrieved Successfully!',
        meta: result.meta,
        data: result.data,
    });
});
const getById = (0, catchAsync_1.default)(async (req, res) => {
    const { id } = req.params;
    const result = await internetPackage_service_1.InternetPackageService.getById(id);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Internet Package Retrieved Successfully!',
        data: result,
    });
});
const updateById = (0, catchAsync_1.default)(async (req, res) => {
    const { id } = req.params;
    const result = await internetPackage_service_1.InternetPackageService.updateById(id, req.body);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Internet Package Updated Successfully!',
        data: result,
    });
});
const deleteById = (0, catchAsync_1.default)(async (req, res) => {
    const { id } = req.params;
    const result = await internetPackage_service_1.InternetPackageService.deleteById(id);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Internet Package Deleted Successfully!',
        data: result,
    });
});
exports.InternetPackageController = {
    create,
    getAllOrFilter,
    getById,
    updateById,
    deleteById,
};
