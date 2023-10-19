"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NewConnectionReqService = void 0;
const prisma_1 = __importDefault(require("../../../shared/prisma"));
const paginationHelper_1 = require("../../../helpers/paginationHelper");
const create = async (payload) => {
    const result = await prisma_1.default.newConnectionReq.create({
        data: payload,
    });
    return result;
};
const updateById = async (id, payload) => {
    const result = await prisma_1.default.newConnectionReq.update({
        where: {
            id,
        },
        data: payload,
    });
    return result;
};
const deleteById = async (id) => {
    const result = await prisma_1.default.newConnectionReq.delete({
        where: {
            id,
        },
    });
    return result;
};
const getById = async (id) => {
    const result = await prisma_1.default.newConnectionReq.findUnique({
        where: {
            id,
        },
    });
    return result;
};
const getAllOrFilter = async (filters, options) => {
    const { page, limit, skip } = paginationHelper_1.paginationHelpers.calculatePagination(options);
    const result = await prisma_1.default.newConnectionReq.findMany({
        where: filters,
        skip,
        take: limit,
        orderBy: options.sortBy && options.sortOrder
            ? {
                [options.sortBy]: options.sortOrder,
            }
            : {
                connectionDate: 'desc',
            },
    });
    const total = await prisma_1.default.newConnectionReq.count({ where: filters });
    return {
        meta: {
            page,
            limit,
            total,
        },
        data: result,
    };
};
exports.NewConnectionReqService = {
    create,
    updateById,
    deleteById,
    getById,
    getAllOrFilter,
};
