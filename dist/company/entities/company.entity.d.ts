import { Governorate } from 'src/governorate/entities/governorate.entity';
import { ROLE } from './../../auth/enums/role.enum';
import { TypeOfCompany } from 'src/typeofcompany/entities/typeofcompany.entity';
import { UnderGovernorate } from 'src/under-governorate/entities/under-governorate.entity';
export declare class Company {
    id: number;
    firstName: string;
    creatingDate: Date;
    lastName: string;
    email: string;
    secondPhone: number;
    photo: string;
    phone: string;
    instaLink: string;
    facebookLink: string;
    linkedinLink: string;
    websiteLink: string;
    description: string;
    location: string;
    password: string;
    role: ROLE;
    typeOfCompanyId: number;
    governorateId: number;
    undergovernorateId: number;
    typeOfCompany: TypeOfCompany;
    governorate: Governorate;
    undergovernorate: UnderGovernorate;
    isActive: boolean;
}
