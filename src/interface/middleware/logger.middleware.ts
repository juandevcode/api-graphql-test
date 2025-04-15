import { Request, Response, NextFunction } from "express";

export const requestLogger = (req: Request, res: Response, next: NextFunction) => {
  const timestamp = new Date().toISOString();
  console.log(`[REQUEST] ${req.method} ${req.url} ${req.baseUrl} - Time: ${timestamp}}`);
  next();
};
