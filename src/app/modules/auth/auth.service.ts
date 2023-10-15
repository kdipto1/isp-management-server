import { User } from '@prisma/client';
import prisma from '../../../shared/prisma';
import { JwtHelpers } from '../../../helpers/jwtHelpers';
import config from '../../../config';
import bcrypt from 'bcrypt';
import type { Secret } from 'jsonwebtoken';
import { ILoginResponse } from './auth.interfaces';
import ApiError from '../../../errors/ApiError';
import httpStatus from 'http-status';

const signup = async (payload: User) => {
  if (payload) {
    const hashedPassword = await bcrypt.hash(
      payload.password,
      Number(config.bcrypt_salt_rounds),
    );

    payload.password = hashedPassword;
  }
  payload.role = 'user';
  const result = await prisma.user.create({
    data: payload,
    select: {
      id: true,
      email: true,
      firstName: true,
      middleName: true,
      lastName: true,
      contactNo: true,
      profileImage: true,
    },
  });
  return result;
};

const login = async (payload: {
  contactNo: number;
  password: string;
}): Promise<ILoginResponse> => {
  const { contactNo, password } = payload;

  if (!contactNo || !password)
    throw new ApiError(
      httpStatus.UNAUTHORIZED,
      'Contact No and Password Required',
    );

  const isUserExists = await prisma.user.findUnique({
    where: {
      contactNo,
    },
  });
  if (!isUserExists) throw new ApiError(httpStatus.NOT_FOUND, 'User not found');

  const isPasswordCorrect = await bcrypt.compare(
    password as string,
    isUserExists.password,
  );

  if (!isPasswordCorrect) {
    throw new ApiError(httpStatus.UNAUTHORIZED, 'Incorrect password');
  }

  const { id: userId, role } = isUserExists;
  const accessToken = JwtHelpers.createToken(
    { userId, role },
    config.jwt.secret as Secret,
    config.jwt.expires_in as string,
  );
  const refreshToken = JwtHelpers.createToken(
    { userId, role },
    config.jwt.refresh_secret as Secret,
    config.jwt.refresh_expires_in as string,
  );

  return { accessToken, refreshToken };
};

export const AuthService = {
  signup,
  login,
};
