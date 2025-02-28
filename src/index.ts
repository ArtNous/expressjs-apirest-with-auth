import Server from './Server'
import { buildHistoriasMedicasRoutes, buildPacientesRoutes } from './routes'
import buildLoginRoute from './routes/auth/login'

/**
 * Inicializamos el servidor express
 */
const server = new Server()
/**
 * Registramos las rutas de los pacientes
 * Aqui realizamos el crud de los pacientes
 */
buildPacientesRoutes(server)

/**
 * Registramos la ruta de las historias medicas
 * Aqui realizamos el crud de las historias medicas
 */
buildHistoriasMedicasRoutes(server)

/**
 * Login
 */
buildLoginRoute(server)

/**
 * Iniciamos el servidor
 */
server.start()