import Controller from "../Controller";
import { IApiController } from "../IApiController";
import IController from "../IController";
import { Request, Response } from 'express';

class LoginController extends Controller implements IController, IApiController {
    protected routePath = '/login';
    static instance: LoginController | null = null;

    static getInstance() {
        if (!LoginController.instance) {
            LoginController.instance = new LoginController()
        }

        return LoginController.instance
    }

    getAll(_: Request, __: Response) {}
    getOne(_: Request<ApiQueryParams>, __: Response) {}
    create(req: any, res: Response) {
        const data = req.body
        try {
            this.validateData(data)
        } catch(error: any) {
            return res.status(400).send(error.message)
        }
        req.session.user = {
            id: 1,
            username: data.username,
        }
        req.session.admin = data.username === 'leodev.vzla@gmail.com'

        res.send('Logeado')
    }
    update(_: Request<unknown, unknown, PacienteUpdateDTO>, __: Response) {}
    delete(_: Request<ApiQueryParams>, __: Response) {}

    validateData(data: LoginDTO) {
        if (!data.username) {
            throw new Error('username is required')
        }

        if (!data.password) {
            throw new Error('password is required')
        }
    }
}

const controller = LoginController.getInstance()
export default controller