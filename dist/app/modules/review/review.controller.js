"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReviewController = void 0;
const catchAsync_1 = __importDefault(require("../../../shared/catchAsync"));
const review_service_1 = require("./review.service");
const sendResponse_1 = __importDefault(require("../../../shared/sendResponse"));
const http_status_1 = __importDefault(require("http-status"));
const create = (0, catchAsync_1.default)(async (req, res) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const customer = req.user;
    const result = await review_service_1.ReviewService.create(customer, req.body);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Review Created Successfully!',
        data: result,
    });
});
const getAllOrFilter = (0, catchAsync_1.default)(async (req, res) => {
    const result = await review_service_1.ReviewService.getAllOrFilter();
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Reviews Retrieved Successfully!',
        data: result,
    });
});
const getById = (0, catchAsync_1.default)(async (req, res) => {
    const { id } = req.params;
    const result = await review_service_1.ReviewService.getById(id);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Review Retrieved Successfully!',
        data: result,
    });
});
const updateById = (0, catchAsync_1.default)(async (req, res) => {
    const { id } = req.params;
    const result = await review_service_1.ReviewService.updateById(id, req.body);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Review Updated Successfully!',
        data: result,
    });
});
const deleteById = (0, catchAsync_1.default)(async (req, res) => {
    const { id } = req.params;
    const result = await review_service_1.ReviewService.deleteById(id);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Review Deleted Successfully!',
        data: result,
    });
});
exports.ReviewController = {
    create,
    getAllOrFilter,
    getById,
    updateById,
    deleteById,
};
