import { Request, Response, NextFunction } from 'express';

const asyncHandler = (
  func: (arg0: Request, arg1: Response, arg2: NextFunction) => any
) => (req: Request, res: Response, next: NextFunction) =>
  Promise.resolve(func(req, res, next)).catch(next);

module.exports = asyncHandler;
