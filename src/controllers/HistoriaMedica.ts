import Controller from "../Controller";
import { IApiController } from "../IApiController";
import IController from "../IController";
import { Request, Response } from 'express';

class HistoriaMedicaController extends Controller implements IController, IApiController {
    getAll(_: Request, res: Response) {
        res.json({
            data: []
        })
    }
    getOne(req: Request<ApiQueryParams>, res: Response) {
        console.log(req.params.resource)
        res.json({
            data: {}
        })
    }
    create(req: Request<unknown, unknown, HistoriaMedicaCreateDTO>, res: Response) {
        const { glicemia, hematologia } = req.body;
        console.log(glicemia, hematologia)
        res.json({
            historia: {
                glicemia,
                hematologia
            }
        })
    }
    update(req: Request<unknown, unknown, HistoriaMedicaUpdateDTO>, res: Response) {
        const { glicemia, hematologia } = req.body;
        console.log(glicemia, hematologia)
        res.json({
            historia: {
                glicemia,
                hematologia
            }
        })
    }
    delete(req: Request<ApiQueryParams>, res: Response) {
        const { resource } = req.params;
        res.json({
            message: `Historia eliminada ${resource}`
        })
    }
    protected routePath = '/historias-medicas';
}

const controller = new HistoriaMedicaController()
export default controller