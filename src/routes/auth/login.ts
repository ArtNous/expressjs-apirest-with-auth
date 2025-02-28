import Route, { HttpMethod, MethodController } from "../../lib/Route"
import Server from "../../Server"
import LoginController from '../../controllers/Login'
import registerRoute from "../../lib/registerRoute"

const routes = [
    ['/', HttpMethod.POST, 'create'],
]

export default function buildRoute(server: Server) {
    for (const [path, method, handler] of routes) {
        const route = new Route(
            LoginController,
            method as HttpMethod,
            path
        )
        route.register(LoginController.router, handler as MethodController)
        registerRoute(server, LoginController)
    }
}