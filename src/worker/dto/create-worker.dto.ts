import { ROLE } from "src/auth/enums/role.enum";

export class WorkerDto {
  firstName?: string;
  age?: number;
  lastName?: string;
  email?: string;
  secondPhone?: number;
  photo?: string;
  phone?: number;
  instaLink?: string;
  facebookLink?: string;
  linkedinLink?: string;
  websiteLink?: string;
  description?: string;
  TypeOfWorkerid?: number;
  password?:string;
  role:ROLE.WORKER;
}
