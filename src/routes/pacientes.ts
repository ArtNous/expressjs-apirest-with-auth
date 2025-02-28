import Route, { HttpMethod, MethodController } from "../lib/Route"
import Server from "../Server"
import PacienteController from '../controllers/Paciente'
import registerRoute from "../lib/registerRoute"
import auth from "./middlewares/auth"

const routes = [
    ['/', HttpMethod.GET, 'getAll'],
]

export default function buildRoute(server: Server) {
    for (const [path, method, handler] of routes) {
        const pacienteRoute = new Route(
            PacienteController,
            method as HttpMethod,
            path
        )
        pacienteRoute.register(PacienteController.router, handler as MethodController, [auth])
        registerRoute(server, PacienteController)
    }
}