import Route, { HttpMethod, MethodController } from "../lib/Route"
import Server from "../Server"
import HistoriaMedicaController from '../controllers/HistoriaMedica'
import registerRoute from "../lib/registerRoute"
import auth from "./middlewares/auth"
import isAdmin from "./middlewares/isAdmin"

const routes = [
    ['/', HttpMethod.GET, 'getAll'],
    ['/', HttpMethod.POST, 'create'],
    ['/:resource', HttpMethod.PUT, 'update'],
    ['/:resource', HttpMethod.DELETE, 'delete'],
    ['/:resource', HttpMethod.GET, 'getOne'],
]

export default function buildRoute(server: Server) {
    for (const [path, method, handler] of routes) {
        const route = new Route(
            HistoriaMedicaController,
            method as HttpMethod,
            path
        )
        route.register(HistoriaMedicaController.router, handler as MethodController, [auth, isAdmin])
        registerRoute(server, HistoriaMedicaController)
    }
}