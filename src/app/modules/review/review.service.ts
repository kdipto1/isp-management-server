import { Prisma, Review } from '@prisma/client';
import prisma from '../../../shared/prisma';
import { JwtPayload } from 'jsonwebtoken';

const create = async (
  customer: JwtPayload,
  payload: Prisma.ReviewCreateInput,
): Promise<Review> => {
  const result = await prisma.review.create({
    data: {
      message: payload.message,
      customerId: customer.userId,
      ratting: payload.ratting,
    },
  });
  return result;
};

const getAllOrFilter = async () => {
  const result = await prisma.review.findMany({
    include: {
      customer: true,
    },
  });

  return result;
};

const getById = async (id: string) => {
  const result = await prisma.review.findUnique({
    where: {
      id,
    },
  });
  return result;
};

const updateById = async (id: string, payload: Prisma.ReviewUpdateInput) => {
  const result = await prisma.review.update({
    where: {
      id,
    },
    data: payload,
  });
  return result;
};

const deleteById = async (id: string) => {
  const result = await prisma.review.delete({
    where: {
      id,
    },
  });
  return result;
};

export const ReviewService = {
  create,
  getAllOrFilter,
  getById,
  updateById,
  deleteById,
};
