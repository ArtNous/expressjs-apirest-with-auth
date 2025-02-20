import express, { RequestHandler, Router } from 'express'

export default abstract class Controller {
    protected _router: Router;
    protected routeName: string = '/';

    constructor() {
        this._router = express.Router({
            mergeParams: true
        });
        this.defineGet();
        this.definePost();
        this.definePut();
        this.defineDelete();
    }

    getRouteName() {
        return this.routeName
    }

    abstract defineGet(): void;
    abstract definePost(): void;
    abstract definePut(): void;
    abstract defineDelete(): void;

    registerMiddleware(middleware: RequestHandler) {
        this.router.use(middleware)
    }

    get router() {
        return this._router
    }
}