import { HistoriaMedicaValidator } from "../../validators/historiaMedica"

describe('HistoriaMedica validator', () => {
    test('Data is valid', () => {
        const validator = new HistoriaMedicaValidator()
        validator.validate('POST', {
            hemoglobina: 13.1,
            glicemia: 82,
            isHipertenso: false,
            isDiabetico: false
        }).then(() => {
            expect(validator.getErrors()).toBeNull()
        })
    })

    test('Invalid data', () => {
        const validator = new HistoriaMedicaValidator()
        validator.validate('POST', {
            hemoglobina: '13.1',
            glicemia: 82,
            isHipertenso: false,
            isDiabetico: 2
        }).then(() => {
            const errors = validator.getErrors()
            expect(['isDiabetico', 'hemoglobina'].includes(errors?.name!)).toBeTruthy()
            expect(validator.getErrors()).not.toBeNull()
        })
    })
})