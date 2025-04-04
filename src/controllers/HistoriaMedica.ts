import Controller from "../Controller";
import { IApiController } from "../IApiController";
import IController from "../IController";
import { Request, Response } from 'express';

const historias = new Map()

class HistoriaMedicaController extends Controller implements IController, IApiController {
    getAll(_: Request, res: Response) {
        res
            .json({
                data: [...historias.values()],
            })
    }
    getOne(req: Request<ApiQueryParams>, res: Response) {
        const { resource } = req.params;
        const historia = historias.get(resource)
        if (!historia) {
            return res.status(404).json({
                message: 'Historia no encontrada'
            })
        }
        res.json(historia)
    }
    create(req: Request<unknown, unknown, HistoriaMedicaCreateDTO>, res: Response) {
        const { glicemia, hemoglobina, isDiabetico, isHipertenso, paciente } = req.body;
        const id = Math.floor(Math.random() * 1000)
        const historia = {
            idHistoriaMedica: id,
            glicemia,
            hemoglobina,
            isDiabetico,
            isHipertenso,
            paciente
        }
        historias.set(id, historia)
        res.json(historia)
    }
    update(req: Request<HistoriasUpdateParams, unknown, HistoriaMedicaUpdateDTO>, res: Response) {
        const { glicemia, hemoglobina } = req.body;
        const key = Number(req.params?.resource)
        if (historias.has(key) === false) {
            return res.status(404).json({
                message: 'Historia no encontrada'
            })

        }
        historias.set(key, {
            ...historias.get(key),
            glicemia,
            hemoglobina
        })
        res.json(historias.get(key))
    }
    delete(req: Request<ApiQueryParams>, res: Response) {
        const { resource } = req.params;
        historias.delete(Number(resource))
        res.json({
            message: `Historia eliminada ${resource}`
        })
    }
    protected routePath = '/historias-medicas';
}

const controller = new HistoriaMedicaController()
export default controller