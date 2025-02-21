import IController from "../IController";
import Server from "../Server";

export default function registerRoute(server: Server, controller: IController) {
    server.registerRoute(controller.getRoutePath(), controller.router)
}