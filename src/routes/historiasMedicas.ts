import Route, { HttpMethod, MethodController } from "../lib/Route"
import Server from "../Server"
import HistoriaMedicaController from '../controllers/HistoriaMedica'
import registerRoute from "../lib/registerRoute"
import auth from "./middlewares/auth"
import { Request, Response, NextFunction } from "express"
import { HistoriaMedicaValidator } from "../validators/historiaMedica"

const routes = [
    ['/', HttpMethod.GET, 'getAll'],
    ['/', HttpMethod.POST, 'create'],
    ['/:resource', HttpMethod.PUT, 'update'],
    ['/:resource', HttpMethod.DELETE, 'delete'],
    ['/:resource', HttpMethod.GET, 'getOne'],
]

export default function buildRoute(server: Server) {
    const handlers: any = []
    if (process.env.NODE_ENV !== 'development') {
        handlers.push(auth)
    }

    const validator = HistoriaMedicaValidator.getInstance()
    handlers.push(async (req: Request, res: Response, next: NextFunction) => {
        await validator.validate(req)
        const error = validator.getErrors()
        if (error !== null) {
            return res.status(400).json({
                message: 'Error de validación',
                errors: {
                    [error!.name]: error!.messages
                },
            })
        }
        next()
    })
    for (const [path, method, handler] of routes) {
        const route = new Route(
            HistoriaMedicaController,
            method as HttpMethod,
            path
        )
        route.register(HistoriaMedicaController.router, handler as MethodController, handlers)
        registerRoute(server, HistoriaMedicaController)
    }
}