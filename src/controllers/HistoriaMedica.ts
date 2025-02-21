import Controller from "../Controller";
import HistoriaMedicaCreateDTO from "../dtos/HistoriaMedica";
import { IApiController } from "../IApiController";
import IController from "../IController";
import { Request, Response } from 'express';

interface QueryParams {
    resource?: string
}

class HistoriaMedicaController extends Controller implements IController, IApiController {
    getAll(_: Request, res: Response) {
        res.send('Todas las historias')
    }
    getOne(req: Request<QueryParams>, res: Response) {
        console.log(req.params.resource)
        res.send('Una historia')
    }
    create(req: Request<unknown, unknown, HistoriaMedicaCreateDTO>, res: Response) {
        const { nombre, direccion } = req.body;
        console.log(nombre, direccion)
        res.send('Historia creada')
    }
    update() {
        throw new Error("Method not implemented.");
    }
    delete() {
        throw new Error("Method not implemented.");
    }
    protected routePath = '/historias-medicas';
}

const controller = new HistoriaMedicaController()
export default controller