import Controller from "../Controller";
import { IApiController } from "../IApiController";
import IController from "../IController";
import { Request, Response } from 'express';
import { PacienteRepo } from "../lib/database/PacienteRepo";

class PacienteController extends Controller implements IController, IApiController {
    protected routePath = '/pacientes';
    async getAll(_: Request, res: Response) {
        const repo = PacienteRepo.getInstance()
        const pacientes = await repo.getAll(0, 10)
        res.json({
            data: pacientes
        })
    }
    async getOne(req: Request<ApiQueryParams>, res: Response) {
        const repo = PacienteRepo.getInstance()
        if (!req.params.resource) {
            return res.status(400).send('idPaciente is required')
        }
        const paciente = await repo.getOne(req.params.resource)
        res.json({
            data: paciente
        })
    }
    async create(req: Request<unknown, unknown, PacienteCreateDTO>, res: Response) {
        const repo = PacienteRepo.getInstance()
        const created = await repo.create(req.body)
        res.json({
            data: created
        })
    }
    async update(req: Request<ApiQueryParams, unknown, PacienteUpdateDTO>, res: Response) {
        const repo = PacienteRepo.getInstance()
        if (!req.params?.resource) {
            throw new Error('idPaciente is required')
        }
        const updated = await repo.update(req.params?.resource, req.body)
        res.json({
            message: 'Paciente actualizado',
            data: updated
        })
    }
    async delete(req: Request<ApiQueryParams>, res: Response) {
        const { resource } = req.params;
        if (!resource) {
            return res.status(400).send('idPaciente is required')
        }
        await PacienteRepo.getInstance().delete(resource)
        res.json({
            message: `Paciente ${resource} eliminado`
        })
    }
}

const controller = new PacienteController()
export default controller