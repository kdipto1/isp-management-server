import { CustomerConnectionStatus, Prisma } from '@prisma/client';
import prisma from '../../../shared/prisma';

const create = async (
  data: Prisma.CustomerConnectionStatusCreateInput,
): Promise<CustomerConnectionStatus> => {
  const result = prisma.customerConnectionStatus.create({
    data,
  });
  return result;
};

const getAllOrFilter = async (): Promise<CustomerConnectionStatus[]> => {
  const result = prisma.customerConnectionStatus.findMany();
  return result;
};

const getById = async (
  id: string,
): Promise<CustomerConnectionStatus | null> => {
  const result = prisma.customerConnectionStatus.findUnique({
    where: { id },
  });
  return result;
};

const updateById = async (
  id: string,
  data: Prisma.CustomerConnectionStatusUpdateInput,
): Promise<CustomerConnectionStatus> => {
  const result = prisma.customerConnectionStatus.update({
    where: { id },
    data,
  });
  return result;
};

const deleteById = async (id: string): Promise<CustomerConnectionStatus> => {
  const result = prisma.customerConnectionStatus.delete({
    where: { id },
  });
  return result;
};

export const CustomerConnectionStatusService = {
  create,
  getAllOrFilter,
  getById,
  updateById,
  deleteById,
};
