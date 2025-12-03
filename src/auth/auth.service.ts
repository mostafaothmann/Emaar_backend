import { CustomerService } from 'src/customer/customer.service';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { CompanyService } from 'src/company/company.service';
import { WorkerService } from 'src/worker/worker.service';
import { ROLE } from './enums/role.enum';

type authInput = { email: string; password: string };
type signInData = { email: string; id: number; role: ROLE };
type AuthResult = { accessToken: string; id: number; email: string; role: ROLE };

@Injectable()
export class AuthService {
  constructor(
    private customerService: CustomerService,
    private companyService: CompanyService,
    private workerService: WorkerService,
    private readonly jwtService: JwtService,
  ) {}

  // ------------------------
  // GENERAL AUTHENTICATE()
  // ------------------------
  async authenticate(input: authInput): Promise<AuthResult> {
    const user =
      (await this.validateCustomer(input)) ||
      (await this.validateWorker(input)) ||
      (await this.validateCompany(input));

    if (!user) throw new UnauthorizedException('Invalid email or password');

    return this.signIn(user);
  }

  // ------------------------
  // CUSTOMER AUTHENTICATION
  // ------------------------
  async authenticateCustomer(input: authInput): Promise<AuthResult> {
    const user = await this.validateCustomer(input);

    if (!user) throw new UnauthorizedException('Invalid Customer credentials');

    return this.signIn(user);
  }

  async validateCustomer(input: authInput): Promise<signInData | null> {
    const user = await this.customerService.findByEmail(input.email);

    if (user && user.password === input.password) {
      return { id: user.id, email: user.email, role: user.role };
    }

    return null;
  }

  // ------------------------
  // WORKER AUTHENTICATION
  // ------------------------
  async authenticateWorker(input: authInput): Promise<AuthResult> {
    const user = await this.validateWorker(input);

    if (!user) throw new UnauthorizedException('Invalid Worker credentials');

    return this.signIn(user);
  }

  async validateWorker(input: authInput): Promise<signInData | null> {
    const worker = await this.workerService.findByEmail(input.email);

    if (worker && worker.password === input.password) {
      return { id: worker.id, email: worker.email, role: worker.role };
    }

    return null;
  }

  // ------------------------
  // COMPANY AUTHENTICATION
  // ------------------------
  async authenticateCompany(input: authInput): Promise<AuthResult> {
    const user = await this.validateCompany(input);

    if (!user) throw new UnauthorizedException('Invalid Company credentials');

    return this.signIn(user);
  }

  async validateCompany(input: authInput): Promise<signInData | null> {
    const company = await this.companyService.findByEmail(input.email);

    if (company && company.password === input.password) {
      return { id: company.id, email: company.email, role: company.role };
    }

    return null;
  }

  // ------------------------
  // SIGN IN TOKEN GENERATION
  // ------------------------
  async signIn(user: signInData): Promise<AuthResult> {
    const tokenPayload = {
      sub: user.id,
      email: user.email,
      role: user.role,
    };

    const accessToken = this.jwtService.sign(tokenPayload);

    return {
      accessToken,
      id: user.id,
      email: user.email,
      role: user.role,
    };
  }

  async generateToken(payload: { sub: number; email: string; role: string }) {
    const token = this.jwtService.sign(payload);
    return { access_token: token };
  }

  async verifyToken(token: string) {
    return this.jwtService.verify(token);
  }
}
