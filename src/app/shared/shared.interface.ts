export interface IAdmin {
    email: string;
    password: string;
}

export interface ITodo { 
    id?: number;
    name: string;
    description: string;
    createdAt: Date;
    editedAt?: Date | string;
}

export interface IReadTable {
    position: number;
    name: string;
    dateOfcreate: Date;
    dateOfEdit: Date | string;
    edit: number;
    delete: number;
    description?: string;
}