import { NextFunction, Request, Response } from "express";

export const getUsers = (req: Request, resp: Response, next: NextFunction) => {
  const users: string[] = ["A", "B", "C", "somad"];
  resp.json({ users });
};
