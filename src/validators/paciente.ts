import { Request } from 'express'
import * as yup from 'yup'
import { ValidationError } from './ValidationError'

export class PacienteValidator implements IValidator<PacienteModel> {
    createSchema: yup.ObjectSchema<PacienteCreateDTO>
    updateSchema: yup.ObjectSchema<PacienteUpdateDTO>
    validationError: ValidationError<PacienteModel> | null = null

    constructor() {
        this.createSchema = yup.object({
            nombre: yup.string().required('El nombre es requerido'),
            direccion: yup.string().required('La dirección es requerida')
        })

        this.updateSchema = yup.object().shape({
            idPaciente: yup.string().required('El idPaciente es requerido'),
            nombre: yup.string(),
            direccion: yup.string()
        })
    }

    getErrors() {
        return this.validationError
    }

    async validate(req: Request) {
        switch (req.method) {
            case 'POST':
                try {
                    await this.createSchema.validate(req.body, {
                        strict: true
                    })
                } catch (error: any) {
                    console.log(error)
                    this.validationError = new ValidationError<PacienteCreateDTO>(error.path as keyof PacienteCreateDTO, error.errors)
                }
                break;
            case 'PUT':
                try {
                    await this.updateSchema.validate(req.body, {
                        strict: true
                    })
                } catch (error: any) {
                    const validationError = new ValidationError<PacienteUpdateDTO>(error.path as keyof PacienteUpdateDTO, error.errors)
                    this.validationError = validationError
                }
                break;
            default:
                return
        }
    }
}