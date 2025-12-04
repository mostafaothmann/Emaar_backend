import { ROLE } from "src/auth/enums/role.enum";

export class CustomerDto {
  firstName?: string;
  age?: number;
  lastName?: string;
  email?: string;
  secondPhone?: number;
  photo?: string;
  phone?: string;
  instaLink?: string;
  facebookLink?: string;
  linkedinLink?: string;
  websiteLink?: string;
  description?: string;
  location?: string;
  password?:string;
  role:ROLE.CUSTOMER
}
