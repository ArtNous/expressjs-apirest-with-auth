interface PacienteCreateDTO {
    nombre: string;
    direccion: string;
}

type PacienteUpdateDTO = Required<Pick<PacienteModel, 'idPaciente'>> & Partial<PacienteModel>

interface HistoriaMedicaCreateDTO {
    hematologia: string;
    glicemia: string;
}

interface HistoriaMedicaUpdateDTO {
    hematologia?: string;
    glicemia?: string;
}

interface LoginDTO {
    username: string;
    password: string;
}

interface PacienteModel {
    idPaciente: string;
    nombre: string;
    direccion: string;
}