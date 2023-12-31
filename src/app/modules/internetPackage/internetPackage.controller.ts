import { Request, Response } from 'express';
import catchAsync from '../../../shared/catchAsync';
import { InternetPackageService } from './internetPackage.service';
import sendResponse from '../../../shared/sendResponse';
import httpStatus from 'http-status';
import pick from '../../../shared/pick';
import { PackageFilterAbleFields } from './internetPackage.constants';

const create = catchAsync(async (req: Request, res: Response) => {
  const result = await InternetPackageService.create(req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Internet Packages Created Successfully!',
    data: result,
  });
});

const getAllOrFilter = catchAsync(async (req: Request, res: Response) => {
  const filters = pick(req.query, PackageFilterAbleFields);
  const options = pick(req.query, ['page', 'limit', 'sortBy', 'sortOrder']);
  const result = await InternetPackageService.getAllOrFilter(filters, options);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Internet Packages Retrieved Successfully!',
    meta: result.meta,
    data: result.data,
  });
});

const getById = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await InternetPackageService.getById(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Internet Package Retrieved Successfully!',
    data: result,
  });
});

const updateById = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await InternetPackageService.updateById(id, req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Internet Package Updated Successfully!',
    data: result,
  });
});

const deleteById = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await InternetPackageService.deleteById(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Internet Package Deleted Successfully!',
    data: result,
  });
});

export const InternetPackageController = {
  create,
  getAllOrFilter,
  getById,
  updateById,
  deleteById,
};
