"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = __importDefault(require("../../config"));
const handleValidationError_1 = __importDefault(require("../../errors/handleValidationError"));
const client_1 = require("@prisma/client");
const handleClientError_1 = __importDefault(require("../../errors/handleClientError"));
const ApiError_1 = __importDefault(require("../../errors/ApiError"));
const globalErrorHandler = (err, req, res, 
// eslint-disable-next-line @typescript-eslint/no-unused-vars
next) => {
    config_1.default.env === 'development'
        ? console.log(`🐱‍🏍 globalErrorHandler ~~`, { err })
        : console.error(`🐱‍🏍 globalErrorHandler ~~`, err);
    let statusCode = 500;
    let message = 'Something went wrong !';
    let errorMessages = [];
    if (err instanceof client_1.Prisma.PrismaClientValidationError) {
        const simplifiedError = (0, handleValidationError_1.default)(err);
        statusCode = simplifiedError?.statusCode;
        message = simplifiedError?.message;
        errorMessages = simplifiedError?.errorMessages;
    }
    else if (err instanceof client_1.Prisma.PrismaClientKnownRequestError) {
        const simplifiedError = (0, handleClientError_1.default)(err);
        statusCode = simplifiedError?.statusCode;
        message = simplifiedError?.message;
        errorMessages = simplifiedError?.errorMessages;
    }
    else if (err instanceof ApiError_1.default) {
        statusCode = err?.statusCode;
        message = err?.message;
        errorMessages = err?.message
            ? [
                {
                    path: '',
                    message: err?.message,
                },
            ]
            : [];
    }
    else if (err instanceof Error) {
        message = err?.message;
        errorMessages = err?.message
            ? [
                {
                    path: '',
                    message: err?.message,
                },
            ]
            : [];
    }
    else if (err) {
        message = err?.message;
        errorMessages = err?.message
            ? [
                {
                    path: '',
                    message: err?.message,
                },
            ]
            : [];
    }
    res.status(statusCode).json({
        success: false,
        message,
        errorMessages,
        stack: config_1.default.env !== 'production' ? err?.stack : undefined,
    });
};
exports.default = globalErrorHandler;
