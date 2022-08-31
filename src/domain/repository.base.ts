export interface IRepository<T> {
    findAll(query: T): Promise<T[]>;
    findById(id: number): Promise<T | null>;
    // doesExists(id: number): Promise<boolean>;
    save(object: T): Promise<T>;
    // update(id: number, object: T): Promise<T>;
}
