import Controller from "../Controller";
import { IApiController } from "../IApiController";
import IController from "../IController";
import { Request, Response } from 'express';

class HistoriaMedicaController extends Controller implements IController, IApiController {
    getAll(_: Request, res: Response) {
        res
            .json({
                data: []
            })
    }
    getOne(req: Request<ApiQueryParams>, res: Response) {
        if (((req.session as unknown) as {
            user: any
        }).user) {
            res.json({
                message: 'sesion iniciada'
            })
        } else {
            res.json({
                data: []
            })
        }
    }
    create(req: Request<unknown, unknown, HistoriaMedicaCreateDTO>, res: Response) {
        const { glicemia, hemoglobina, isDiabetico, isHipertenso, paciente } = req.body;
        res.json({
            historia: {
                glicemia,
                hemoglobina,
                isDiabetico,
                isHipertenso,
                paciente
            }
        })
    }
    update(req: Request<unknown, unknown, HistoriaMedicaUpdateDTO>, res: Response) {
        const { glicemia, hemoglobina } = req.body;
        res.json({
            historia: {
                glicemia,
                hemoglobina
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