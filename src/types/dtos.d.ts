interface PacienteModel {
    idPaciente: string;
    nombre: string;
    direccion: string;
}

interface HistoriaMedicaModel {
    idHistoriaMedica: number;
    hemoglobina: number;
    glicemia: number;
    isHipertenso: boolean;
    isDiabetico: boolean;
    paciente: Pick<PacienteModel, 'idPaciente'>;
}

type HistoriaMedicaOptionalCreateDTOKeys = 'hemoglobina' | 'glicemia'

type HistoriaMedicaCreateDTO = Omit<HistoriaMedicaModel, 'idHistoriaMedica'> & {
    [key in HistoriaMedicaOptionalCreateDTOKeys]?: HistoriaMedicaModel[key]
}

interface HistoriasUpdateParams {
    resource?: string;
}

type RequiredFieldsToUpdateHistoriaMedica = 'idHistoriaMedica' | 'paciente'
type OptionalFieldsToUpdateHistoriaMedica = 'hemoglobina' | 'glicemia' | 'isHipertenso' | 'isDiabetico'
type HistoriaMedicaUpdateDTO = Pick<HistoriaMedicaModel, RequiredFieldsToUpdateHistoriaMedica> & Partial<Pick<HistoriaMedicaModel, OptionalFieldsToUpdateHistoriaMedica>>

type PacienteCreateDTO = Omit<PacienteModel, 'idPaciente'>
type PacienteUpdateDTO = Required<Pick<PacienteModel, 'idPaciente'>> & Partial<PacienteModel>

interface LoginDTO {
    username: string;
    password: string;
}

