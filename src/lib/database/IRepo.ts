export interface IRepo<T, CDTO, UDTO> {
    getAll(limit: number, offset: number): Promise<T[]>;
    getOne(id: string): Promise<T | undefined>;
    create(data: CDTO): Promise<T>;
    update(id: string, data: UDTO): Promise<T>;
    delete(id: string): Promise<void>;
}