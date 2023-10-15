'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const config_1 = __importDefault(require('../../config'));
const handleValidationError_1 = __importDefault(
  require('../../errors/handleValidationError'),
);
const handleClientError_1 = __importDefault(
  require('../../errors/handleClientError'),
);
const ApiError_1 = __importDefault(require('../../errors/ApiError'));
const client_1 = require('@prisma/client');
const globalErrorHandler = (
  error,
  req,
  res,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  next,
) => {
  config_1.default.env === 'development'
    ? console.error(`globalErrorHandler :-*`, error)
    : console.error(`globalErrorHandler :-*`, error);
  let statusCode = 500;
  let message = 'Something went wrong !';
  let errorMessages = [];
  if (error instanceof client_1.Prisma.PrismaClientValidationError) {
    const simplifiedError = (0, handleValidationError_1.default)(error);
    statusCode = simplifiedError.statusCode;
    message = simplifiedError.message;
    errorMessages = simplifiedError.errorMessages;
  } else if (error instanceof client_1.Prisma.PrismaClientKnownRequestError) {
    const simplifiedError = (0, handleClientError_1.default)(error);
    statusCode = simplifiedError.statusCode;
    message = simplifiedError.message;
    errorMessages = simplifiedError.errorMessages;
  } else if (error instanceof ApiError_1.default) {
    statusCode = error?.statusCode;
    message = error.message;
    errorMessages = error?.message
      ? [
          {
            path: '',
            message: error?.message,
          },
        ]
      : [];
  } else if (error instanceof Error) {
    message = error?.message;
    errorMessages = error?.message
      ? [
          {
            path: '',
            message: error?.message,
          },
        ]
      : [];
  }
  res.status(statusCode).json({
    success: false,
    message,
    errorMessages,
    stack: config_1.default.env !== 'production' ? error?.stack : undefined,
  });
};
exports.default = globalErrorHandler;
