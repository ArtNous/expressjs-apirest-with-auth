import Controller from "../Controller";
import { IApiController } from "../IApiController";
import IController from "../IController";
import { Request, Response } from 'express';

class PacienteController extends Controller implements IController, IApiController {
    protected routePath = '/pacientes';
    getAll(_: Request, res: Response) {
        res.send('Todos los pacientes')
    }
    getOne(_: Request, res: Response) {
        res.send('Un paciente')
    }
    create(_: Request, res: Response) {
        res.send('Paciente creado')
    }
    update(_: Request, res: Response) {
        res.send('Paciente actualizado')
    }
    delete(_: Request, res: Response) {
        res.send('Paciente eliminado')
    }
}

const controller = new PacienteController()
export default controller