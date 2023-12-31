"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const handleClientError = (error) => {
    let errors = [];
    let message = '';
    if (error.code === 'P2025') {
        message = error.meta?.cause || 'Record not found!';
        errors = [
            {
                path: '',
                message,
            },
        ];
    }
    else if (error.code === 'P2003') {
        if (error.message.includes('delete() invocation:')) {
            message = 'Delete failed!';
            errors = [
                {
                    path: '',
                    message,
                },
            ];
        }
    }
    else if (error.code === 'P2002') {
        if (error.message.includes('create() invocation:')) {
            message = 'Failed! to create';
            errors = [
                {
                    path: '',
                    message,
                },
            ];
        }
    }
    const statusCode = 400;
    return {
        statusCode,
        message,
        errorMessages: errors,
    };
};
exports.default = handleClientError;
