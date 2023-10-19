"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const prisma_1 = __importDefault(require("../../../shared/prisma"));
const paginationHelper_1 = require("../../../helpers/paginationHelper");
const user_constants_1 = require("./user.constants");
const ApiError_1 = __importDefault(require("../../../errors/ApiError"));
const http_status_1 = __importDefault(require("http-status"));
const getAllOrFilter = async (filters, options) => {
    const { page, limit, skip } = paginationHelper_1.paginationHelpers.calculatePagination(options);
    const { searchTerm, contactNo, ...filtersData } = filters;
    const andConditions = [];
    if (searchTerm) {
        andConditions.push({
            OR: user_constants_1.UserSearchAbleFields.filter(
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            field => typeof filtersData[field] === 'string').map(field => ({
                [field]: {
                    contains: searchTerm,
                    mode: 'insensitive',
                },
            })),
        });
    }
    if (contactNo) {
        andConditions.push({
            contactNo: {
                equals: Number(contactNo),
            },
        });
    }
    if (Object.keys(filtersData).length > 0) {
        andConditions.push({
            AND: Object.keys(filtersData).map(key => ({
                [key]: {
                    equals: filtersData[key],
                },
            })),
        });
    }
    const whereConditions = andConditions.length > 0 ? { AND: andConditions } : {};
    const result = await prisma_1.default.user.findMany({
        where: whereConditions,
        select: {
            id: true,
            email: true,
            firstName: true,
            middleName: true,
            lastName: true,
            contactNo: true,
            profileImage: true,
            address: true,
            role: true,
            createdAt: true,
            updatedAt: true,
        },
        skip,
        take: limit,
        orderBy: options.sortBy && options.sortOrder
            ? {
                [options.sortBy]: options.sortOrder,
            }
            : { createdAt: 'desc' },
    });
    const total = await prisma_1.default.user.count({ where: whereConditions });
    return {
        meta: {
            total,
            page,
            limit,
        },
        data: result,
    };
};
const getById = async (id) => {
    const result = await prisma_1.default.user.findUniqueOrThrow({
        where: {
            id,
        },
    });
    return result;
};
const getUserProfile = async (userId) => {
    const result = await prisma_1.default.user.findUnique({
        where: {
            id: userId,
        },
        select: {
            id: true,
            email: true,
            firstName: true,
            middleName: true,
            lastName: true,
            contactNo: true,
            profileImage: true,
            address: true,
            role: true,
            createdAt: true,
            updatedAt: true,
            password: false,
        },
    });
    return result;
};
const updateById = async (id, payload) => {
    const result = await prisma_1.default.user.update({
        where: {
            id,
        },
        data: payload,
    });
    if (!result)
        throw new ApiError_1.default(http_status_1.default.NOT_MODIFIED, 'Failed to update');
    return result;
};
const deleteById = async (id) => {
    const result = await prisma_1.default.user.delete({
        where: {
            id,
        },
    });
    if (!result)
        throw new ApiError_1.default(http_status_1.default.NOT_MODIFIED, 'Failed to delete');
    return result;
};
exports.UserService = {
    getAllOrFilter,
    getById,
    updateById,
    deleteById,
    getUserProfile,
};
