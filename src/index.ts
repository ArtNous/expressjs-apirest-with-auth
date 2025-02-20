import PacienteController from './controllers/Paciente'
import HistoriaMedicaController from './controllers/HistoriaMedica'
import registerRoute from './lib/registerRoute'
import Server from './Server'

/**
 * Inicializamos el servidor express
 */
const server = new Server()
/**
 * Registramos la ruta de los pacientes
 * Aqui realizamos el crud de los pacientes
 */
registerRoute(server, PacienteController)

/**
 * Registramos la ruta de las historias medicas
 * Aqui realizamos el crud de las historias medicas
 */
registerRoute(server, HistoriaMedicaController)

/**
 * Iniciamos el servidor
 */
server.start()