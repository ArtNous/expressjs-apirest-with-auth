import { NextFunction, Request, Response } from "express";

const isAdmin = async (req: Request, res: Response, next: NextFunction) => {
    if (req.session && req.session.admin) {
        next();
    } else {
        res.status(401).send('Sorry, you\'re not an admin');
    }
}

export default isAdmin