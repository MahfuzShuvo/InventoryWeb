import { SystemUser } from './systemUser';
export class Supplier {
    _id: string;
    firstName: string;
    lastName: string;
    phone: string;
    email: string;
    gender: string = 'male';
    street: string;
    city: string;
    state: string;
    zip: string;
    createdBy: SystemUser[];
    status: boolean;
}
