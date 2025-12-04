"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const customer_service_1 = require("../customer/customer.service");
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const company_service_1 = require("../company/company.service");
const worker_service_1 = require("../worker/worker.service");
let AuthService = class AuthService {
    customerService;
    companyService;
    workerService;
    jwtService;
    constructor(customerService, companyService, workerService, jwtService) {
        this.customerService = customerService;
        this.companyService = companyService;
        this.workerService = workerService;
        this.jwtService = jwtService;
    }
    async authenticate(input) {
        const user = (await this.validateCustomer(input)) ||
            (await this.validateWorker(input)) ||
            (await this.validateCompany(input));
        if (!user)
            throw new common_1.UnauthorizedException('Invalid email or password');
        return this.signIn(user);
    }
    async authenticateCustomer(input) {
        const user = await this.validateCustomer(input);
        if (!user)
            throw new common_1.UnauthorizedException('Invalid Customer credentials');
        return this.signIn(user);
    }
    async validateCustomer(input) {
        const user = await this.customerService.findByEmail(input.email);
        if (user && user.password === input.password) {
            return { id: user.id, email: user.email, role: user.role };
        }
        return null;
    }
    async authenticateWorker(input) {
        const user = await this.validateWorker(input);
        if (!user)
            throw new common_1.UnauthorizedException('Invalid Worker credentials');
        return this.signIn(user);
    }
    async validateWorker(input) {
        const worker = await this.workerService.findByEmail(input.email);
        if (worker && worker.password === input.password) {
            return { id: worker.id, email: worker.email, role: worker.role };
        }
        return null;
    }
    async authenticateCompany(input) {
        const user = await this.validateCompany(input);
        if (!user)
            throw new common_1.UnauthorizedException('Invalid Company credentials');
        return this.signIn(user);
    }
    async validateCompany(input) {
        const company = await this.companyService.findByEmail(input.email);
        if (company && company.password === input.password) {
            return { id: company.id, email: company.email, role: company.role };
        }
        return null;
    }
    async signIn(user) {
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
    async generateToken(payload) {
        const token = this.jwtService.sign(payload);
        return { access_token: token };
    }
    async verifyToken(token) {
        return this.jwtService.verify(token);
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [customer_service_1.CustomerService,
        company_service_1.CompanyService,
        worker_service_1.WorkerService,
        jwt_1.JwtService])
], AuthService);
//# sourceMappingURL=auth.service.js.map