"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlogController = void 0;
const catchAsync_1 = __importDefault(require("../../../shared/catchAsync"));
const blog_service_1 = require("./blog.service");
const sendResponse_1 = __importDefault(require("../../../shared/sendResponse"));
const http_status_1 = __importDefault(require("http-status"));
const create = (0, catchAsync_1.default)(async (req, res) => {
    const result = await blog_service_1.BlogService.create(req.body);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Blog Created Successfully!',
        data: result,
    });
});
const getAllOrFilter = (0, catchAsync_1.default)(async (req, res) => {
    const result = await blog_service_1.BlogService.getAllOrFilter();
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Blogs Retrieved Successfully!',
        data: result,
    });
});
const getById = (0, catchAsync_1.default)(async (req, res) => {
    const { id } = req.params;
    const result = await blog_service_1.BlogService.getById(id);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Blog Retrieved Successfully!',
        data: result,
    });
});
const updateById = (0, catchAsync_1.default)(async (req, res) => {
    const { id } = req.params;
    const result = await blog_service_1.BlogService.updateById(id, req.body);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Blog Updated Successfully!',
        data: result,
    });
});
const deleteById = (0, catchAsync_1.default)(async (req, res) => {
    const { id } = req.params;
    const result = await blog_service_1.BlogService.deleteById(id);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Blog Deleted Successfully!',
        data: result,
    });
});
exports.BlogController = {
    create,
    getAllOrFilter,
    getById,
    updateById,
    deleteById,
};
