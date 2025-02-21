import express from 'express'

export default interface IController {
    getRoutePath(): string;

    router: express.Router
}