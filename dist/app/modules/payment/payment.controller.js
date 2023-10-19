"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentController = void 0;
const catchAsync_1 = __importDefault(require("../../../shared/catchAsync"));
const payment_service_1 = require("./payment.service");
const sendResponse_1 = __importDefault(require("../../../shared/sendResponse"));
const http_status_1 = __importDefault(require("http-status"));
const create = (0, catchAsync_1.default)(async (req, res) => {
    const result = await payment_service_1.PaymentService.create(req.body);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Payment Created Successfully!',
        data: result,
    });
});
const getAllOrFilter = (0, catchAsync_1.default)(async (req, res) => {
    const result = await payment_service_1.PaymentService.getAllOrFilter();
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Payments Retrieved Successfully!',
        data: result,
    });
});
const getById = (0, catchAsync_1.default)(async (req, res) => {
    const { id } = req.params;
    const result = await payment_service_1.PaymentService.getById(id);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Payment Retrieved Successfully!',
        data: result,
    });
});
const updateById = (0, catchAsync_1.default)(async (req, res) => {
    const { id } = req.params;
    const result = await payment_service_1.PaymentService.updateById(id, req.body);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Payment Updated Successfully!',
        data: result,
    });
});
const deleteById = (0, catchAsync_1.default)(async (req, res) => {
    const { id } = req.params;
    const result = await payment_service_1.PaymentService.deleteById(id);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Payment Deleted Successfully!',
        data: result,
    });
});
exports.PaymentController = {
    create,
    getAllOrFilter,
    getById,
    updateById,
    deleteById,
};
