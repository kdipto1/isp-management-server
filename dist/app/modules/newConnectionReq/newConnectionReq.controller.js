"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NewConnectionReqController = void 0;
const catchAsync_1 = __importDefault(require("../../../shared/catchAsync"));
const newConnectionReq_service_1 = require("./newConnectionReq.service");
const sendResponse_1 = __importDefault(require("../../../shared/sendResponse"));
const http_status_1 = __importDefault(require("http-status"));
const create = (0, catchAsync_1.default)(async (req, res) => {
    const result = await newConnectionReq_service_1.NewConnectionReqService.create(req.body);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'New Connection Request Created Successfully!',
        data: result,
    });
});
const updateById = (0, catchAsync_1.default)(async (req, res) => {
    const { id } = req.params;
    const result = await newConnectionReq_service_1.NewConnectionReqService.updateById(id, req.body);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'New Connection Request Updated Successfully!',
        data: result,
    });
});
const deleteById = (0, catchAsync_1.default)(async (req, res) => {
    const { id } = req.params;
    const result = await newConnectionReq_service_1.NewConnectionReqService.deleteById(id);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'New Connection Request Deleted Successfully!',
        data: result,
    });
});
const getById = (0, catchAsync_1.default)(async (req, res) => {
    const { id } = req.params;
    const result = await newConnectionReq_service_1.NewConnectionReqService.getById(id);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'New Connection Request Retrieved Successfully!',
        data: result,
    });
});
const getAllOrFilter = (0, catchAsync_1.default)(async (req, res) => {
    const filters = req.query;
    const options = req.query;
    const result = await newConnectionReq_service_1.NewConnectionReqService.getAllOrFilter(filters, options);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'New Connection Requests Retrieved Successfully!',
        meta: result.meta,
        data: result.data,
    });
});
exports.NewConnectionReqController = {
    create,
    updateById,
    deleteById,
    getById,
    getAllOrFilter,
};
