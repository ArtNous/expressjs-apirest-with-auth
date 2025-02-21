import { Request, Response } from "express";

export interface IApiController {
    getAll: (req: Request, res: Response) => void;
    getOne: (req: Request, res: Response) => void;
    create: (req: Request, res: Response) => void;
    update: (req: Request, res: Response) => void;
    delete: (req: Request, res: Response) => void;
}