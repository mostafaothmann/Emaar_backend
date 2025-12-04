import { AuthService } from './auth.service';
export declare class AuthCustomerController {
    private authService;
    constructor(authService: AuthService);
    login(input: {
        email: string;
        password: string;
    }): Promise<{
        accessToken: string;
        id: number;
        email: string;
        role: import("./enums/role.enum").ROLE;
    }>;
    getUserInfo(request: any): any;
}
