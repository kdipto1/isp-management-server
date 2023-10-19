"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InternetPackageService = void 0;
const prisma_1 = __importDefault(require("../../../shared/prisma"));
const paginationHelper_1 = require("../../../helpers/paginationHelper");
const internetPackage_constants_1 = require("./internetPackage.constants");
const create = async (payload) => {
    const result = await prisma_1.default.package.create({
        data: payload,
    });
    return result;
};
const getAllOrFilter = async (filters, options) => {
    const { page, limit, skip } = paginationHelper_1.paginationHelpers.calculatePagination(options);
    const { searchTerm, bandwidth, minPrice, maxPrice, ...filtersData } = filters;
    const andConditions = [];
    if (searchTerm) {
        andConditions.push({
            OR: internetPackage_constants_1.PackageSearchAbleFields.filter(
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
    if (minPrice) {
        andConditions.push({
            price: {
                gte: Number(minPrice),
            },
        });
    }
    if (maxPrice) {
        andConditions.push({
            price: {
                lte: Number(maxPrice),
            },
        });
    }
    if (bandwidth) {
        andConditions.push({
            bandwidth: {
                equals: Number(bandwidth),
            },
        });
    }
    if (filtersData.iptv !== undefined) {
        andConditions.push({
            iptv: {
                equals: filtersData.iptv,
            },
        });
    }
    if (filtersData.bdix !== undefined) {
        andConditions.push({
            bdix: {
                equals: filtersData.bdix,
            },
        });
    }
    if (Object.keys(filtersData).length > 0) {
        andConditions.push({
            AND: Object.keys(filtersData).map(key => ({
                [key]: {
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    equals: filtersData[key],
                },
            })),
        });
    }
    const whereConditions = andConditions.length > 0 ? { AND: andConditions } : {};
    const result = await prisma_1.default.package.findMany({
        where: whereConditions,
        skip,
        take: limit,
        orderBy: options.sortBy && options.sortOrder
            ? {
                [options.sortBy]: options.sortOrder,
            }
            : { createdAt: 'desc' },
    });
    const total = await prisma_1.default.package.count({ where: whereConditions });
    return {
        meta: {
            page,
            limit,
            total,
        },
        data: result,
    };
};
const getById = async (id) => {
    const result = await prisma_1.default.package.findUniqueOrThrow({
        where: {
            id,
        },
    });
    return result;
};
const updateById = async (id, payload) => {
    const result = await prisma_1.default.package.update({
        where: {
            id,
        },
        data: payload,
    });
    return result;
};
const deleteById = async (id) => {
    const result = await prisma_1.default.package.delete({
        where: {
            id,
        },
    });
    return result;
};
exports.InternetPackageService = {
    create,
    getAllOrFilter,
    getById,
    updateById,
    deleteById,
};
