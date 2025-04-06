import Controller from "../Controller";
import { HistoriaMedicaRepo } from "../lib/database/HistoriaMedicaRepo";
import { IApiController } from "../IApiController";
import IController from "../IController";
import { Request, Response } from 'express';
import { IRepo } from "../lib/database/IRepo";


class HistoriaMedicaController extends Controller implements IController, IApiController {
    constructor(private repo: IRepo<HistoriaMedicaModel, HistoriaMedicaCreateDTO, HistoriaMedicaUpdateDTO>) {
        super()
    }
    async getAll(req: Request, res: Response) {
        const { limit = 10, offset = 0 } = req.query
        const historias = await this.repo.getAll(Number(limit), Number(offset));
        res
            .json({
                data: historias,
            })
    }
    async getOne(req: Request<ApiQueryParams>, res: Response) {
        const { resource } = req.params;
        if (!resource) {
            return res.status(400).json({
                message: 'El id es requerido'
            })
        }
        try {
            const historia = await this.repo.getOne(resource);
            res.json(historia)
        } catch (error: any) {
            return res.status(404).json({
                message: error.message
            })
        }
    }
    async create(req: Request<unknown, unknown, HistoriaMedicaCreateDTO>, res: Response) {
        const { glicemia, hemoglobina, isDiabetico, isHipertenso, paciente } = req.body;
        const historia = await this.repo.create({
            glicemia,
            hemoglobina,
            isDiabetico,
            isHipertenso,
            paciente
        });
        res.json(historia)
    }
    async update(req: Request<HistoriasUpdateParams, unknown, HistoriaMedicaUpdateDTO>, res: Response) {
        const key = req.params?.resource
        if (!key) {
            return res.status(400).json({
                message: 'El id es requerido'
            })
        }
        try {
            const historia = await this.repo.update(key, req.body)
            res.json(historia)
        } catch (error: any) {
            return res.status(404).json({
                message: error.message
            })
        }
    }
    async delete(req: Request<ApiQueryParams>, res: Response) {
        const { resource } = req.params;
        if (!resource) {
            return res.status(400).json({
                message: 'El id es requerido'
            })
        }
        try {
            await this.repo.delete(resource)
            res.json({
                message: `Historia eliminada ${resource}`
            })
        } catch (error: any) {
            return res.status(404).json({
                message: error.message
            })
        }
    }
    protected routePath = '/historias-medicas';
}

const repo = HistoriaMedicaRepo.getInstance()
const controller = new HistoriaMedicaController(repo)
export default controller