import { Request, Response } from 'express';
import catchAsync from '../../../shared/catchAsync';
import { BlogService } from './blog.service';
import sendResponse from '../../../shared/sendResponse';
import httpStatus from 'http-status';

const create = catchAsync(async (req: Request, res: Response) => {
  const result = await BlogService.create(req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Blog Created Successfully!',
    data: result,
  });
});

const getAllOrFilter = catchAsync(async (req: Request, res: Response) => {
  const result = await BlogService.getAllOrFilter();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Blogs Retrieved Successfully!',
    data: result,
  });
});

const getById = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await BlogService.getById(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Blog Retrieved Successfully!',
    data: result,
  });
});

const updateById = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await BlogService.updateById(id, req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Blog Updated Successfully!',
    data: result,
  });
});

const deleteById = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await BlogService.deleteById(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Blog Deleted Successfully!',
    data: result,
  });
});

export const BlogController = {
  create,
  getAllOrFilter,
  getById,
  updateById,
  deleteById,
};
