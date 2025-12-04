import { ROLE } from 'src/auth/enums/role.enum';
import { CustomerPropertyOffer } from 'src/customer-property-offer/entities/customer-property-offer.entity';
import { Property } from 'src/property/entities/property.entity';
export declare class Customer {
    id: number;
    firstName: string;
    age: number;
    lastName: string;
    email: string;
    password: string;
    secondPhone: number;
    photo: string;
    role: ROLE;
    phone: string;
    instaLink: string;
    facebookLink: string;
    linkedinLink: string;
    websiteLink: string;
    description: string;
    location: string;
    properties: Property[];
    offers: CustomerPropertyOffer[];
}
