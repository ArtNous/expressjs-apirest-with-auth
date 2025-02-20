import Controller from "../Controller";

class PacienteController extends Controller {
    routeName = '/paciente'
    defineGet() {
        this._router.get('/', (_, res) => {
            res.send('Obteniendo pacientes!');
        })
    }

    definePost() {
        this._router.post('/', (_, res) => {
            res.send('Creando paciente!');
        })
    }

    definePut() {
        this._router.put('/:resource', (req, res) => {
            console.log(req.params)
            res.send('Actualizando paciente!');
        })
    }

    defineDelete() {
        this._router.delete('/:resource', (req, res) => {
            console.log(req.params)
            res.send('Eliminando paciente!');
        })
    }
}

const controller = new PacienteController()
export default controller