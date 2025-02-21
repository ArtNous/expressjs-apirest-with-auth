import Controller from "../Controller";
import { IApiController } from "../IApiController";
import IController from "../IController";
import { Request, Response } from 'express';

class HistoriaMedicaController extends Controller implements IController, IApiController {
    getAll(_: Request, res: Response) {
        res
            .json({
                data: [],
                message: 'Cookie is set'
            })
    }
    getOne(req: Request<ApiQueryParams>, res: Response) {
        console.log(req.params.resource)
        if (((req.session as unknown) as {
            user: any
        }).user) {
            res.json({
                message: 'sesion iniciada'
            })
        } else {
            res.json({
                data: {}
            })
        }
    }
    create(req: Request<unknown, unknown, HistoriaMedicaCreateDTO>, res: Response) {
        const { glicemia, hematologia } = req.body;
        console.log(glicemia, hematologia);
        ((req.session as unknown) as {
            user: any
        }).user = {
            id: 69,
            name: 'Jesus'
        }
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