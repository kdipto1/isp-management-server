"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationService = void 0;
const prisma_1 = __importDefault(require("../../../shared/prisma"));
const create = async (payload) => {
    const result = await prisma_1.default.notification.create({
        data: payload,
    });
    return result;
};
const getAllOrFilter = async () => {
    const result = await prisma_1.default.notification.findMany({});
    return result;
};
const getById = async (id) => {
    const result = await prisma_1.default.notification.findUnique({
        where: {
            id,
        },
    });
    return result;
};
const updateById = async (id, payload) => {
    const result = await prisma_1.default.notification.update({
        where: {
            id,
        },
        data: payload,
    });
    return result;
};
const deleteById = async (id) => {
    const result = await prisma_1.default.notification.delete({
        where: {
            id,
        },
    });
    return result;
};
exports.NotificationService = {
    create,
    getAllOrFilter,
    getById,
    updateById,
    deleteById,
};
