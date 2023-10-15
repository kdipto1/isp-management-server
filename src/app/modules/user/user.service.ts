import { User } from '@prisma/client';
import prisma from '../../../shared/prisma';

const getAllOrFilter = async () => {
  const result = await prisma.user.findMany();
  return result;
};

const getById = async (id: string) => {
  const result = await prisma.user.findUniqueOrThrow({
    where: {
      id,
    },
  });
  return result;
};

const updateById = async (id: string, payload: Partial<User>) => {
  const result = await prisma.user.update({
    where: {
      id,
    },
    data: payload,
  });
  return result;
};

const deleteById = async (id: string) => {
  const result = await prisma.user.delete({
    where: {
      id,
    },
  });
  return result;
};

export const UserService = {
  getAllOrFilter,
  getById,
  updateById,
  deleteById,
};
