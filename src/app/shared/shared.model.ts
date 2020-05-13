import { IAdmin, ITodo } from './shared.interface';

export class Admin implements IAdmin {
    constructor(
        public email: string,
        public password: string
    ) {}
}

export class Todo implements ITodo {
    constructor(
        public name: string,
        public description: string,
        public createdAt: Date,
        public editedAt?: Date | string,
        public id?: number,
        public position?: number
    ) { }
}