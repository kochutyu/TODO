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