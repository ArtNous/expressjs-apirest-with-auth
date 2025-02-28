import Controller from "../Controller";
import { IApiController } from "../IApiController";
import IController from "../IController";
import { Request, Response } from 'express';

class PacienteController extends Controller implements IController, IApiController {
    protected routePath = '/pacientes';
    getAll(_: Request, res: Response) {
        res.json({
            data: [{
                nombre: 'Juan',
                direccion: 'Calle 123'
            }]
        })
    }
    getOne(_: Request<ApiQueryParams>, res: Response) {
        res.json({
            data: {
                nombre: 'Juan',
                direccion: 'Calle 123'
            }
        })
    }
    create(req: Request<unknown, unknown, PacienteCreateDTO>, res: Response) {
        const { nombre, direccion } = req.body;
        res.json({
            data: {
                nombre,
                direccion
            }
        })
    }
    update(_: Request<unknown, unknown, PacienteUpdateDTO>, res: Response) {
        res.json({
            message: 'Paciente actualizado'
        })
    }
    delete(req: Request<ApiQueryParams>, res: Response) {
        const { resource } = req.params;
        res.json({
            message: `Paciente ${resource} eliminado`
        })
    }
}

const controller = new PacienteController()
export default controller