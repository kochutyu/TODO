import { IAdmin } from './shared.interface';

export class Admin implements IAdmin {
    constructor(
        public email: string,
        public password: string
    ) {}
}