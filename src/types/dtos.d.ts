interface PacienteCreateDTO {
    nombre: string;
    direccion: string;
}

interface PacienteUpdateDTO {
    nombre?: string;
    direccion?: string;
}

interface HistoriaMedicaCreateDTO {
    hematologia: string;
    glicemia: string;
}

interface HistoriaMedicaUpdateDTO {
    hematologia?: string;
    glicemia?: string;
}