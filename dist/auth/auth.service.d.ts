import { CustomerService } from 'src/customer/customer.service';
import { JwtService } from '@nestjs/jwt';
import { CompanyService } from 'src/company/company.service';
import { WorkerService } from 'src/worker/worker.service';
import { ROLE } from './enums/role.enum';
type authInput = {
    email: string;
    password: string;
};
type signInData = {
    email: string;
    id: number;
    role: ROLE;
};
type AuthResult = {
    accessToken: string;
    id: number;
    email: string;
    role: ROLE;
};
export declare class AuthService {
    private customerService;
    private companyService;
    private workerService;
    private readonly jwtService;
    constructor(customerService: CustomerService, companyService: CompanyService, workerService: WorkerService, jwtService: JwtService);
    authenticate(input: authInput): Promise<AuthResult>;
    authenticateCustomer(input: authInput): Promise<AuthResult>;
    validateCustomer(input: authInput): Promise<signInData | null>;
    authenticateWorker(input: authInput): Promise<AuthResult>;
    validateWorker(input: authInput): Promise<signInData | null>;
    authenticateCompany(input: authInput): Promise<AuthResult>;
    validateCompany(input: authInput): Promise<signInData | null>;
    signIn(user: signInData): Promise<AuthResult>;
    generateToken(payload: {
        sub: number;
        email: string;
        role: string;
    }): Promise<{
        access_token: string;
    }>;
    verifyToken(token: string): Promise<any>;
}
export {};
