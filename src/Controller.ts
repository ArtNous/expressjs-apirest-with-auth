import express, { Router } from 'express'

export default class Controller {
    protected _router: Router;
    protected routePath: string = '/';

    constructor() {
        this._router = express.Router({
            mergeParams: true
        });
    }

    getRoutePath() {
        return this.routePath
    }

    get router() {
        return this._router
    }
}