import { PacienteValidator } from "../../validators/paciente"

describe('Validators', () => {
    test('Data is valid', () => {
        const validator = new PacienteValidator()
        validator.validate('POST', {
            nombre: 'Juan',
            direccion: 'Calle 123'
        }).then(() => {
            expect(validator.getErrors()).toBeNull()
        })
    })

    test('Invalid data', () => {
        const validator = new PacienteValidator()
        validator.validate('POST', {
            direccion: 'Calle 123'
        }).then(() => {
            const errors = validator.getErrors()
            expect(errors?.name).toBe('nombre')
            expect(validator.getErrors()).not.toBeNull()
        })
    })
})