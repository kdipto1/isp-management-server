import { Package } from '@prisma/client';
import prisma from '../../../shared/prisma';

const create = async (payload: Package) => {
  const result = await prisma.package.create({
    data: payload,
  });
  return result;
};

const getAllOrFilter = async () => {
  const result = await prisma.package.findMany();
  return result;
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
