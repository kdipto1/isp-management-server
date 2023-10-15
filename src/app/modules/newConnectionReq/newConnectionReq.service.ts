import { NewConnectionReq, Prisma } from '@prisma/client';
import prisma from '../../../shared/prisma';
import { IPaginationOptions } from '../../../interfaces/pagination';
import { paginationHelpers } from '../../../helpers/paginationHelper';
import { IGenericResponse } from '../../../interfaces/common';

const create = async (
  payload: Prisma.NewConnectionReqCreateInput,
): Promise<NewConnectionReq> => {
  const result = await prisma.newConnectionReq.create({
    data: payload,
  });
  return result;
};

const updateById = async (
  id: string,
  payload: Prisma.NewConnectionReqUpdateInput,
): Promise<NewConnectionReq> => {
  const result = await prisma.newConnectionReq.update({
    where: {
      id,
    },
    data: payload,
  });
  return result;
};

const deleteById = async (id: string): Promise<NewConnectionReq> => {
  const result = await prisma.newConnectionReq.delete({
    where: {
      id,
    },
  });
  return result;
};

const getById = async (id: string): Promise<NewConnectionReq | null> => {
  const result = await prisma.newConnectionReq.findUnique({
    where: {
      id,
    },
  });
  return result;
};

const getAllOrFilter = async (
  filters: Prisma.NewConnectionReqWhereInput,
  options: IPaginationOptions,
): Promise<IGenericResponse<NewConnectionReq[]>> => {
  const { page, limit, skip } = paginationHelpers.calculatePagination(options);

  const result = await prisma.newConnectionReq.findMany({
    where: filters,
    skip,
    take: limit,
    orderBy:
      options.sortBy && options.sortOrder
        ? {
            [options.sortBy]: options.sortOrder,
          }
        : {
            connectionDate: 'desc',
          },
  });

  const total = await prisma.newConnectionReq.count({ where: filters });

  return {
    meta: {
      page,
      limit,
      total,
    },
    data: result,
  };
};

export const NewConnectionReqService = {
  create,
  updateById,
  deleteById,
  getById,
  getAllOrFilter,
};
