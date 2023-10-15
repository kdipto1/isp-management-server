import { Package, Prisma } from '@prisma/client';
import prisma from '../../../shared/prisma';
import { IPaginationOptions } from '../../../interfaces/pagination';
import { IPackageFilterRequest } from './internetPackage.interfaces';
import { paginationHelpers } from '../../../helpers/paginationHelper';
import { PackageSearchAbleFields } from './internetPackage.constants';
import { IGenericResponse } from '../../../interfaces/common';

const create = async (payload: Package) => {
  const result = await prisma.package.create({
    data: payload,
  });
  return result;
};

const getAllOrFilter = async (
  filters: IPackageFilterRequest,
  options: IPaginationOptions,
): Promise<IGenericResponse<Package[]>> => {
  const { page, limit, skip } = paginationHelpers.calculatePagination(options);
  const { searchTerm, bandwidth, minPrice, maxPrice, ...filtersData } = filters;

  const andConditions = [];
  if (searchTerm) {
    andConditions.push({
      OR: PackageSearchAbleFields.filter(
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        field => typeof filtersData[field] === 'string',
      ).map(field => ({
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
          equals: (filtersData as any)[key],
        },
      })),
    });
  }

  const whereConditions: Prisma.PackageWhereInput =
    andConditions.length > 0 ? { AND: andConditions } : {};

  const result = await prisma.package.findMany({
    where: whereConditions,
    skip,
    take: limit,
    orderBy:
      options.sortBy && options.sortOrder
        ? {
            [options.sortBy]: options.sortOrder,
          }
        : { createdAt: 'desc' },
  });

  const total = await prisma.package.count({ where: whereConditions });

  return {
    meta: {
      page,
      limit,
      total,
    },
    data: result,
  };
};

const getById = async (id: string) => {
  const result = await prisma.package.findUniqueOrThrow({
    where: {
      id,
    },
  });
  return result;
};

const updateById = async (id: string, payload: Partial<Package>) => {
  const result = await prisma.package.update({
    where: {
      id,
    },
    data: payload,
  });
  return result;
};

const deleteById = async (id: string) => {
  const result = await prisma.package.delete({
    where: {
      id,
    },
  });
  return result;
};

export const InternetPackageService = {
  create,
  getAllOrFilter,
  getById,
  updateById,
  deleteById,
};
