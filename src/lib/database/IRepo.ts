export interface IRepo<T> {
    getAll(limit: number, offset: number): Promise<T[]>;
    getOne(id: string): Promise<T | undefined>;
    create(data: T): Promise<T>;
    update(id: string, data: T): Promise<T>;
    delete(id: string): Promise<void>;
}