import { Response } from 'express';

export const sendRefreshToken = (res: Response, token: string) => {
  res.cookie('cookieName', token, { httpOnly: true });
};
