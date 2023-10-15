import { Payment, Prisma } from '@prisma/client';
import prisma from '../../../shared/prisma';

const create = async (data: Prisma.PaymentCreateInput): Promise<Payment> => {
  const result = prisma.payment.create({
    data,
  });
  return result;
};

const getAllOrFilter = async (): Promise<Payment[]> => {
  const result = prisma.payment.findMany();
  return result;
};

const getById = async (id: string): Promise<Payment | null> => {
  const result = prisma.payment.findUnique({
    where: { id },
  });
  return result;
};

const updateById = async (
  id: string,
  data: Prisma.PaymentUpdateInput,
): Promise<Payment> => {
  const result = prisma.payment.update({
    where: { id },
    data,
  });
  return result;
};

const deleteById = async (id: string): Promise<Payment> => {
  const result = prisma.payment.delete({
    where: { id },
  });
  return result;
};

export const PaymentService = {
  create,
  getAllOrFilter,
  getById,
  updateById,
  deleteById,
};
