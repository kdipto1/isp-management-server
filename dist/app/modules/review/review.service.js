"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReviewService = void 0;
const prisma_1 = __importDefault(require("../../../shared/prisma"));
const create = async (customer, payload) => {
    const result = await prisma_1.default.review.create({
        data: {
            message: payload.message,
            customerId: customer.userId,
            ratting: payload.ratting,
        },
    });
    return result;
};
const getAllOrFilter = async () => {
    const result = await prisma_1.default.review.findMany({
        include: {
            customer: true,
        },
    });
    return result;
};
const getById = async (id) => {
    const result = await prisma_1.default.review.findUnique({
        where: {
            id,
        },
    });
    return result;
};
const updateById = async (id, payload) => {
    const result = await prisma_1.default.review.update({
        where: {
            id,
        },
        data: payload,
    });
    return result;
};
const deleteById = async (id) => {
    const result = await prisma_1.default.review.delete({
        where: {
            id,
        },
    });
    return result;
};
exports.ReviewService = {
    create,
    getAllOrFilter,
    getById,
    updateById,
    deleteById,
};
