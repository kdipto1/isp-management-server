"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlogService = void 0;
const prisma_1 = __importDefault(require("../../../shared/prisma"));
const create = async (payload) => {
    const result = await prisma_1.default.blog.create({
        data: payload,
    });
    return result;
};
const getAllOrFilter = async () => {
    const result = await prisma_1.default.blog.findMany({});
    return result;
};
const getById = async (id) => {
    const result = await prisma_1.default.blog.findUnique({
        where: {
            id,
        },
    });
    return result;
};
const updateById = async (id, payload) => {
    const result = await prisma_1.default.blog.update({
        where: {
            id,
        },
        data: payload,
    });
    return result;
};
const deleteById = async (id) => {
    const result = await prisma_1.default.blog.delete({
        where: {
            id,
        },
    });
    return result;
};
exports.BlogService = {
    create,
    getAllOrFilter,
    getById,
    updateById,
    deleteById,
};
