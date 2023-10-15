import { Request, Response } from 'express';
import catchAsync from '../../../shared/catchAsync';
import { NewConnectionReqService } from './newConnectionReq.service';
import sendResponse from '../../../shared/sendResponse';
import httpStatus from 'http-status';

const create = catchAsync(async (req: Request, res: Response) => {
  const result = await NewConnectionReqService.create(req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'New Connection Request Created Successfully!',
    data: result,
  });
});

const updateById = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await NewConnectionReqService.updateById(id, req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'New Connection Request Updated Successfully!',
    data: result,
  });
});

const deleteById = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await NewConnectionReqService.deleteById(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'New Connection Request Deleted Successfully!',
    data: result,
  });
});

const getById = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await NewConnectionReqService.getById(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'New Connection Request Retrieved Successfully!',
    data: result,
  });
});

const getAllOrFilter = catchAsync(async (req: Request, res: Response) => {
  const filters = req.query;
  const options = req.query;
  const result = await NewConnectionReqService.getAllOrFilter(filters, options);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'New Connection Requests Retrieved Successfully!',
    meta: result.meta,
    data: result.data,
  });
});

export const NewConnectionReqController = {
  create,
  updateById,
  deleteById,
  getById,
  getAllOrFilter,
};
