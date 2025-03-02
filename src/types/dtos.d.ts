interface PacienteCreateDTO {
    nombre: string;
    direccion: string;
}

type PacienteUpdateDTO = Partial<PacienteCreateDTO> & Omit<PacienteCreateDTO, 'idPaciente'>;

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