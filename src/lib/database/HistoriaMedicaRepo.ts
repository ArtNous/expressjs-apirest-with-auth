import { IRepo } from "./IRepo";

const historias: Map<string, HistoriaMedicaModel> = new Map()

export class HistoriaMedicaRepo implements IRepo<HistoriaMedicaModel, HistoriaMedicaCreateDTO, HistoriaMedicaUpdateDTO> {
    static instance: HistoriaMedicaRepo | null = null

    static getInstance(): HistoriaMedicaRepo {
        if (HistoriaMedicaRepo.instance === null) {
            HistoriaMedicaRepo.instance = new HistoriaMedicaRepo()
        }
        return HistoriaMedicaRepo.instance
    }

    getAll(limit: number, offset: number): Promise<HistoriaMedicaModel[]> {
        return Promise.resolve([...historias.values()].slice(offset, limit))
    }
    getOne(id: string): Promise<HistoriaMedicaModel | undefined> {
        const historiaMedica = historias.get(id)
        if (!historiaMedica) {
            throw new Error('No se encontró la historia médica')
        }
        return Promise.resolve(historiaMedica)
    }
    create(data: HistoriaMedicaCreateDTO): Promise<HistoriaMedicaModel> {
        const historiaMedica = {
            ...data,
            idHistoriaMedica: Math.floor(Math.random() * 1000)
        }
        historias.set(historiaMedica.idHistoriaMedica.toString(), historiaMedica)
        return Promise.resolve(historiaMedica)
    }
    update(id: string, data: HistoriaMedicaUpdateDTO): Promise<HistoriaMedicaModel> {
        const historiaMedica = historias.get(id)
        if (!historiaMedica) {
            throw new Error('No se encontró la historia médica')
        }
        const updatedHistoriaMedica = {
            ...historiaMedica,
            ...data
        }
        historias.set(id, updatedHistoriaMedica)
        return Promise.resolve(updatedHistoriaMedica)
    }
    delete(id: string): Promise<void> {
        const historiaMedica = historias.get(id)
        if (!historiaMedica) {
            throw new Error('No se encontró la historia médica')
        }
        historias.delete(id)
        return Promise.resolve()
    }

}