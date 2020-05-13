export interface IAdmin {
    email: string;
    password: string;
}

export interface ITodo { 
    name: string;
    description: string;
    createdAt: Date;
    editedAt?: Date | string,
    id?: number;
    position?: number;
}
