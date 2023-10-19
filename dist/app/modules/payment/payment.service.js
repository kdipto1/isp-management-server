"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentService = void 0;
const prisma_1 = __importDefault(require("../../../shared/prisma"));
const create = async (data) => {
    const result = prisma_1.default.payment.create({
        data,
    });
    return result;
};
const getAllOrFilter = async () => {
    const result = prisma_1.default.payment.findMany();
    return result;
};
const getById = async (id) => {
    const result = prisma_1.default.payment.findUnique({
        where: { id },
    });
    return result;
};
const updateById = async (id, data) => {
    const result = prisma_1.default.payment.update({
        where: { id },
        data,
    });
    return result;
};
const deleteById = async (id) => {
    const result = prisma_1.default.payment.delete({
        where: { id },
    });
    return result;
};
exports.PaymentService = {
    create,
    getAllOrFilter,
    getById,
    updateById,
    deleteById,
};
