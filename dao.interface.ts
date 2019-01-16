export interface DaoInterFace<T> {
    tableName: string;



    //Métodos 
    
    insert(object: T): boolean;
    update(object: T): boolean;
    delete(id: number): T;
    find(id: number): T;
    findAll() : [T];
}