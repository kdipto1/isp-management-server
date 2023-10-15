import { Request, Response } from 'express';
import catchAsync from '../../../shared/catchAsync';
import { PaymentService } from './payment.service';
import sendResponse from '../../../shared/sendResponse';
import httpStatus from 'http-status';

const create = catchAsync(async (req: Request, res: Response) => {
  const result = await PaymentService.create(req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Payment Created Successfully!',
    data: result,
  });
});

const getAllOrFilter = catchAsync(async (req: Request, res: Response) => {
  const result = await PaymentService.getAllOrFilter();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Payments Retrieved Successfully!',
    data: result,
  });
});

const getById = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await PaymentService.getById(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Payment Retrieved Successfully!',
    data: result,
  });
});

const updateById = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await PaymentService.updateById(id, req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Payment Updated Successfully!',
    data: result,
  });
});

const deleteById = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await PaymentService.deleteById(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Payment Deleted Successfully!',
    data: result,
  });
});

export const PaymentController = {
  create,
  getAllOrFilter,
  getById,
  updateById,
  deleteById,
};
