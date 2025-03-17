import Route, { HttpMethod, MethodController } from "../lib/Route"
import Server from "../Server"
import PacienteController from '../controllers/Paciente'
import registerRoute from "../lib/registerRoute"
import auth from "./middlewares/auth"
import { PacienteValidator } from "../validators/paciente"
import { NextFunction, Request, Response } from "express"

const routes = [
    ['/', HttpMethod.GET, 'getAll'],
    ['/:resource', HttpMethod.GET, 'getOne'],
    ['/', HttpMethod.POST, 'create'],
    ['/:resource', HttpMethod.PUT, 'update'],
    ['/:resource', HttpMethod.DELETE, 'delete'],
]

export default function buildRoute(server: Server) {
    const handlers: any = []
    if (process.env.NODE_ENV !== 'development') {
        handlers.push(auth)
    }

    const validator = PacienteValidator.getInstance()
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
        const pacienteRoute = new Route(
            PacienteController,
            method as HttpMethod,
            path
        )
        pacienteRoute.register(PacienteController.router, handler as MethodController, handlers)
        registerRoute(server, PacienteController)
    }
}