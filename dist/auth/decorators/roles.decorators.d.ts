import { ROLE } from "../enums/role.enum";
export declare const ROLES_KEY = "roles";
export declare const Roles: (...roles: [ROLE, ...ROLE[]]) => import("@nestjs/common").CustomDecorator<string>;
