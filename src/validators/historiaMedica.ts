import * as yup from 'yup'
import { ValidationError } from "./ValidationError";
import { Request } from 'express'

export class HistoriaMedicaValidator implements IValidator<HistoriaMedicaModel> {
    createSchema: yup.ObjectSchema<HistoriaMedicaCreateDTO>
    updateSchema: yup.ObjectSchema<HistoriaMedicaUpdateDTO>
    validationError: ValidationError<HistoriaMedicaModel> | null = null

    static validator: HistoriaMedicaValidator | null = null

    constructor() {
        const hemoglobinaCommonYup = yup.number().min(0).max(25)
        const glicemiaCommonYup = yup.number().min(10).max(1200)
            this.createSchema = yup.object({
                hemoglobina: hemoglobinaCommonYup.required('La hemoglobina es requerida'),
                glicemia: glicemiaCommonYup.required('La glicemia es requerida'),
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
                idHistoriaMedica: yup.number().required('El idHistoriaMedica es requerido'),
                isDiabetico: yup.boolean().optional(),
                isHipertenso: yup.boolean().optional(),
                hemoglobina: hemoglobinaCommonYup.optional(),
                glicemia: glicemiaCommonYup.optional(),
            })
        }

    static getInstance() {
        if (HistoriaMedicaValidator.validator === null) {
            HistoriaMedicaValidator.validator = new HistoriaMedicaValidator()
        }
        return HistoriaMedicaValidator.validator
    }

    async validate<T>(method: API.HttpMethod, data: T): Promise<void> {
        this.validationError = null
        switch (method) {
            case 'POST':
                try {
                    await this.createSchema.validate(data, {
                        strict: true
                    })
                } catch (error: any) {
                    console.log(error)
                    this.validationError = new ValidationError<HistoriaMedicaCreateDTO>(error.path as keyof HistoriaMedicaCreateDTO, error.errors)
                }
                break;
            case 'PUT':
                try {
                    await this.updateSchema.validate(data, {
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
