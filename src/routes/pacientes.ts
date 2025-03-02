import Route, { HttpMethod, MethodController } from "../lib/Route"
import Server from "../Server"
import PacienteController from '../controllers/Paciente'
import registerRoute from "../lib/registerRoute"
//import auth from "./middlewares/auth"

const routes = [
    ['/', HttpMethod.GET, 'getAll'],
    ['/:resource', HttpMethod.GET, 'getOne'],
    ['/', HttpMethod.POST, 'create'],
    ['/:resource', HttpMethod.PUT, 'update'],
    ['/:resource', HttpMethod.DELETE, 'delete'],
]

export default function buildRoute(server: Server) {
    for (const [path, method, handler] of routes) {
        const pacienteRoute = new Route(
            PacienteController,
            method as HttpMethod,
            path
        )
        pacienteRoute.register(PacienteController.router, handler as MethodController)
        registerRoute(server, PacienteController)
    }
}