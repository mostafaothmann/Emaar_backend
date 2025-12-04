import { ROLE } from 'src/auth/enums/role.enum';
import { TypeOfWorker } from 'src/typeofworker/entities/typeofworker.entity';
export declare class Worker {
    id: number;
    firstName: string;
    age: number;
    lastName: string;
    email: string;
    password: string;
    role: ROLE;
    secondPhone: number;
    photo: string;
    phone: number;
    instaLink: string;
    facebookLink: string;
    linkedinLink: string;
    websiteLink: string;
    description: string;
    TypeOfWorkerid: number;
    typeOfWorker: TypeOfWorker;
}
