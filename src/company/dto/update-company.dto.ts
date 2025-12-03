import { ROLE } from "src/auth/enums/role.enum";

export class UpdateCompanyDto {
  firstName?: string;
  creatingDate?: Date;
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
  typeOfCompanyId?: number;
  undergovernorateId?: number;
  governoratedId?: number;
  isActive?: boolean;
  role: ROLE.COMPANY;

}
