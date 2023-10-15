'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const catchAsync = fn => async (req, res, next) => {
  try {
    fn(req, res, next);
  } catch (error) {
    next(error);
  }
};
exports.default = catchAsync;
