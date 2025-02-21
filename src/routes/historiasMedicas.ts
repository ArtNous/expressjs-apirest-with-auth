import Route, { HttpMethod, MethodController } from "../lib/Route"
import Server from "../Server"
import HistoriaMedicaController from '../controllers/HistoriaMedica'
import registerRoute from "../lib/registerRoute"

const routes = [
    ['/', HttpMethod.GET, 'getAll'],
    ['/', HttpMethod.POST, 'create'],
    ['/:resource', HttpMethod.GET, 'getOne'],
]

export default function buildRoute(server: Server) {
    for (const [path, method, handler] of routes) {
        const route = new Route(
            HistoriaMedicaController,
            method as HttpMethod,
            path
        )
        route.register(HistoriaMedicaController.router, handler as MethodController)
        registerRoute(server, HistoriaMedicaController)
    }
}