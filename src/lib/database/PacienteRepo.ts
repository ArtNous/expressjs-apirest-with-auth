import { IRepo } from "./IRepo";

export class PacienteRepo implements IRepo<PacienteModel, PacienteCreateDTO, PacienteUpdateDTO> {
    private pacientes: PacienteModel[] = [];

    static instance: PacienteRepo;

    static getInstance() {
        if (!PacienteRepo.instance) {
            PacienteRepo.instance = new PacienteRepo()
        }

        return PacienteRepo.instance
    }
    getAll(_: number, __: number): Promise<PacienteModel[]> {
        return Promise.resolve(this.pacientes)
    }
    getOne(id: string): Promise<PacienteModel | undefined> {
        return Promise.resolve(this.pacientes.find(paciente => paciente.idPaciente === id))
    }
    create(data: PacienteModel): Promise<PacienteModel> {
        this.pacientes.push(data)
        return Promise.resolve(data)
    }
    update(id: string, data: PacienteUpdateDTO): Promise<PacienteModel> {
        const index = this.pacientes.findIndex(paciente => paciente.idPaciente === id)
        this.pacientes[index] = {
            ...this.pacientes[index],
            ...data
        }
        return Promise.resolve(this.pacientes[index])
    }
    async delete(id: string): Promise<void> {
        const index = this.pacientes.findIndex(paciente => paciente.idPaciente === id)
        this.pacientes.splice(index, 1)
    }

}