import express from 'express';
import { IApiController } from '../IApiController';

type Method = 'get' | 'post' | 'put' | 'delete';
export type MethodController = 'getAll' | 'getOne' | 'create' | 'update' | 'delete';
export enum HttpMethod {
    GET = 'get',
    POST = 'post',
    PUT = 'put',
    DELETE = 'delete'
}

export default class Route {
    constructor(
        private controller: IApiController,
        //private _securityLevel: number,
        private _httpMethod: Method,
        private path: string,
    ) {}

    get httpMethod() { return this._httpMethod }

    getPath() { return this.path }

    register(router: express.Router, controllerMethod: MethodController) {
        router[this.httpMethod](this.path, this.controller[controllerMethod]);
    }
}