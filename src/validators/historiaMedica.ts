import * as yup from 'yup'
import { ValidationError } from "./ValidationError";
import { Request } from 'express'

export class HistoriaMedicaValidator implements IValidator<HistoriaMedicaModel> {
    createSchema: yup.ObjectSchema<HistoriaMedicaCreateDTO>
    updateSchema: yup.ObjectSchema<HistoriaMedicaUpdateDTO>
    validationError: ValidationError<HistoriaMedicaModel> | null = null

    static validator: HistoriaMedicaValidator | null = null

    constructor() {
            this.createSchema = yup.object({
                hemoglobina: yup.number().required('La hemoglobina es requerida'),
                glicemia: yup.number().required('La glicemia es requerida'),
                isHipertenso: yup.boolean().required('El isHipertenso es requerido'),
                isDiabetico: yup.boolean().required('El isDiabetico es requerido'),
                paciente: yup.object().shape({
                    idPaciente: yup.string().required('El idPaciente es requerido'),
                })
            })
    
            this.updateSchema = yup.object().shape({
                paciente: yup.object().shape({
                    idPaciente: yup.string().required('El idPaciente es requerido'),
                }),
                idHistoriaMedica: yup.string().required('El idHistoriaMedica es requerido'),
                isDiabetico: yup.boolean().optional(),
                isHipertenso: yup.boolean().optional(),
                hemoglobina: yup.number().optional(),
                glicemia: yup.number().optional(),
            })
        }

    static getInstance() {
        if (HistoriaMedicaValidator.validator === null) {
            HistoriaMedicaValidator.validator = new HistoriaMedicaValidator()
        }
        return HistoriaMedicaValidator.validator
    }

    async validate(req: Request): Promise<void> {
        this.validationError = null
        switch (req.method) {
            case 'POST':
                try {
                    await this.createSchema.validate(req.body, {
                        strict: true
                    })
                } catch (error: any) {
                    console.log(error)
                    this.validationError = new ValidationError<HistoriaMedicaCreateDTO>(error.path as keyof HistoriaMedicaCreateDTO, error.errors)
                }
                break;
            case 'PUT':
                try {
                    await this.updateSchema.validate(req.body, {
                        strict: true
                    })
                } catch (error: any) {
                    const validationError = new ValidationError<HistoriaMedicaUpdateDTO>(error.path as keyof HistoriaMedicaUpdateDTO, error.errors)
                    this.validationError = validationError
                }
                break;
            default:
                return
        }
    }
    getErrors(): ValidationError<HistoriaMedicaModel> | null {
        return this.validationError
    }

}
