import { Request, Response } from 'express';
import catchAsync from '../../../shared/catchAsync';
import { UserService } from './user.service';
import sendResponse from '../../../shared/sendResponse';
import httpStatus from 'http-status';

const getAllOrFilter = catchAsync(async (req: Request, res: Response) => {
  const result = await UserService.getAllOrFilter();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Accounts Retrieved Successfully!',
    data: result,
  });
});
const getById = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await UserService.getById(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Account Retrieved Successfully!',
    data: result,
  });
});
const updateById = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await UserService.updateById(id, req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Account Updated Successfully!',
    data: result,
  });
});

const deleteById = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await UserService.deleteById(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Account Deleted Successfully!',
    data: result,
  });
});

export const UserController = {
  getAllOrFilter,
  getById,
  updateById,
  deleteById,
};
