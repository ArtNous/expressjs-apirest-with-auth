import { IRepo } from "./IRepo";

interface Paciente {
    idPaciente?: string;
    nombre: string;
    direccion: string;
}

export class PacienteRepo implements IRepo<Paciente> {
    private pacientes: Paciente[] = [];

    static instance: PacienteRepo;

    static getInstance() {
        if (!PacienteRepo.instance) {
            PacienteRepo.instance = new PacienteRepo()
        }

        return PacienteRepo.instance
    }
    getAll(_: number, __: number): Promise<Paciente[]> {
        return Promise.resolve(this.pacientes)
    }
    getOne(id: string): Promise<Paciente | undefined> {
        return Promise.resolve(this.pacientes.find(paciente => paciente.idPaciente === id))
    }
    create(data: Paciente): Promise<Paciente> {
        this.pacientes.push(data)
        return Promise.resolve(data)
    }
    update(id: string, data: PacienteUpdateDTO): Promise<Paciente> {
        const index = this.pacientes.findIndex(paciente => paciente.idPaciente === id)
        this.pacientes[index] = data
        return Promise.resolve(data)
    }
    async delete(id: string): Promise<void> {
        const index = this.pacientes.findIndex(paciente => paciente.idPaciente === id)
        this.pacientes.splice(index, 1)
    }

}