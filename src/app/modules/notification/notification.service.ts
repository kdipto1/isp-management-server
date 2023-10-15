import { Prisma } from '@prisma/client';
import prisma from '../../../shared/prisma';

const create = async (payload: Prisma.NotificationCreateInput) => {
  const result = await prisma.notification.create({
    data: payload,
  });
  return result;
};

const getAllOrFilter = async () => {
  const result = await prisma.notification.findMany({});

  return result;
};

const getById = async (id: string) => {
  const result = await prisma.notification.findUnique({
    where: {
      id,
    },
  });
  return result;
};

const updateById = async (
  id: string,
  payload: Prisma.NotificationUpdateInput,
) => {
  const result = await prisma.notification.update({
    where: {
      id,
    },
    data: payload,
  });
  return result;
};

const deleteById = async (id: string) => {
  const result = await prisma.notification.delete({
    where: {
      id,
    },
  });
  return result;
};

export const NotificationService = {
  create,
  getAllOrFilter,
  getById,
  updateById,
  deleteById,
};
