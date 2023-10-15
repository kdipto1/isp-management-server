'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
exports.AuthService = void 0;
const prisma_1 = __importDefault(require('../../../shared/prisma'));
const jwtHelpers_1 = require('../../../helpers/jwtHelpers');
const config_1 = __importDefault(require('../../../config'));
const bcrypt_1 = __importDefault(require('bcrypt'));
const ApiError_1 = __importDefault(require('../../../errors/ApiError'));
const http_status_1 = __importDefault(require('http-status'));
const signup = async payload => {
  if (payload) {
    const hashedPassword = await bcrypt_1.default.hash(
      payload.password,
      Number(config_1.default.bcrypt_salt_rounds),
    );
    payload.password = hashedPassword;
  }
  payload.role = 'user';
  const result = await prisma_1.default.user.create({
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
const login = async payload => {
  const { contactNo, password } = payload;
  const isUserExists = await prisma_1.default.user.findUnique({
    where: {
      contactNo,
    },
  });
  if (!isUserExists)
    throw new ApiError_1.default(
      http_status_1.default.NOT_FOUND,
      'User not found',
    );
  const isPasswordCorrect = await bcrypt_1.default.compare(
    password,
    isUserExists.password,
  );
  if (!isPasswordCorrect) {
    throw new ApiError_1.default(
      http_status_1.default.UNAUTHORIZED,
      'Incorrect password',
    );
  }
  const { id: userId, role } = isUserExists;
  const accessToken = jwtHelpers_1.JwtHelpers.createToken(
    { userId, role },
    config_1.default.jwt.secret,
    config_1.default.jwt.expires_in,
  );
  const refreshToken = jwtHelpers_1.JwtHelpers.createToken(
    { userId, role },
    config_1.default.jwt.refresh_secret,
    config_1.default.jwt.refresh_expires_in,
  );
  return { accessToken, refreshToken };
};
exports.AuthService = {
  signup,
  login,
};
