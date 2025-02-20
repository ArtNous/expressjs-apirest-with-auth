import Controller from "../Controller";
import Server from "../Server";

export default function registerRoute(server: Server, controller: Controller) {
    console.log(`Registrando ruta ${controller.getRouteName()}`)
    server.registerRoute(controller.getRouteName(), controller.router)
}