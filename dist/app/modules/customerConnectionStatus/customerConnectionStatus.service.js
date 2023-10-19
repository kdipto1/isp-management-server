"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerConnectionStatusService = void 0;
const prisma_1 = __importDefault(require("../../../shared/prisma"));
const create = async (data) => {
    const result = prisma_1.default.customerConnectionStatus.create({
        data,
    });
    return result;
};
const getAllOrFilter = async () => {
    const result = prisma_1.default.customerConnectionStatus.findMany();
    return result;
};
const getById = async (id) => {
    const result = prisma_1.default.customerConnectionStatus.findUnique({
        where: { id },
    });
    return result;
};
const updateById = async (id, data) => {
    const result = prisma_1.default.customerConnectionStatus.update({
        where: { id },
        data,
    });
    return result;
};
const deleteById = async (id) => {
    const result = prisma_1.default.customerConnectionStatus.delete({
        where: { id },
    });
    return result;
};
exports.CustomerConnectionStatusService = {
    create,
    getAllOrFilter,
    getById,
    updateById,
    deleteById,
};
