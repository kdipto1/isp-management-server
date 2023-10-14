import { Request, Response } from 'express'
import { AuthService } from './auth.service'
import catchAsync from '../../../shared/catchAsync'
import sendResponse from '../../../shared/sendResponse'
import { User } from '@prisma/client'
import httpStatus from 'http-status'

const signup = catchAsync(async (req: Request, res: Response) => {
  const result = await AuthService.signup(req.body)
  sendResponse<User>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Account Created Successfully!',
    data: result,
  })
})

export const AuthController = {
  signup,
}
