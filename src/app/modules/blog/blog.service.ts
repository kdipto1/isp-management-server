import { Prisma } from '@prisma/client';
import prisma from '../../../shared/prisma';

const create = async (payload: Prisma.BlogCreateInput) => {
  const result = await prisma.blog.create({
    data: payload,
  });
  return result;
};

const getAllOrFilter = async () => {
  const result = await prisma.blog.findMany({});

  return result;
};

const getById = async (id: string) => {
  const result = await prisma.blog.findUnique({
    where: {
      id,
    },
  });
  return result;
};

const updateById = async (id: string, payload: Prisma.BlogUpdateInput) => {
  const result = await prisma.blog.update({
    where: {
      id,
    },
    data: payload,
  });
  return result;
};

const deleteById = async (id: string) => {
  const result = await prisma.blog.delete({
    where: {
      id,
    },
  });
  return result;
};

export const BlogService = {
  create,
  getAllOrFilter,
  getById,
  updateById,
  deleteById,
};
