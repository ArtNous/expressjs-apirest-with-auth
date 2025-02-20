import Controller from "../Controller";

class HistoriaMedicaController extends Controller {
    protected routeName = '/historias-medicas';
    defineGet() {
        this._router.get('/', (_, res) => {
            res.send('Obteniendo historias!');
        })
    }

    definePost() {
        this._router.post('/', (_, res) => {
            res.send('Creando historia médica!');
        })
    }

    definePut() {
        this._router.put('/:resource', (req, res) => {
            console.log(req.params)
            res.send('Actualizando historia médica!');
        })
    }

    defineDelete() {
        this._router.delete('/:resource', (req, res) => {
            console.log(req.params)
            res.send('Eliminando historia médica!');
        })
    }
}

const controller = new HistoriaMedicaController()
export default controller