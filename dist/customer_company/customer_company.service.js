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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerCompanyService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const customer_company_entity_1 = require("./entities/customer_company.entity");
const customer_entity_1 = require("../customer/entities/customer.entity");
const company_entity_1 = require("../company/entities/company.entity");
let CustomerCompanyService = class CustomerCompanyService {
    customerCompanyRepo;
    customerRepo;
    companyRepo;
    constructor(customerCompanyRepo, customerRepo, companyRepo) {
        this.customerCompanyRepo = customerCompanyRepo;
        this.customerRepo = customerRepo;
        this.companyRepo = companyRepo;
    }
    async linkCustomerToCompany(customerId, companyId, startingDate) {
        const customer = await this.customerRepo.findOne({ where: { id: customerId } });
        const company = await this.companyRepo.findOne({ where: { id: companyId } });
        if (!customer)
            throw new common_1.NotFoundException(`Customer ${customerId} not found`);
        if (!company)
            throw new common_1.NotFoundException(`Company ${companyId} not found`);
        const relation = this.customerCompanyRepo.create({
            Customerid: customerId,
            Companyid: companyId,
            customer,
            company,
            startingDate,
        });
        return this.customerCompanyRepo.save(relation);
    }
    async findAll() {
        return this.customerCompanyRepo.find({
            relations: ['customer', 'company'],
        });
    }
    async findByCustomer(customerId) {
        return this.customerCompanyRepo.find({
            where: { Customerid: customerId },
            relations: ['company'],
        });
    }
    async findByCompany(companyId) {
        return this.customerCompanyRepo.find({
            where: { Companyid: companyId },
            relations: ['customer'],
        });
    }
    async unlinkCustomerFromCompany(customerId, companyId) {
        await this.customerCompanyRepo.delete({ Customerid: customerId, Companyid: companyId });
        return { message: `Unlinked customer ${customerId} from company ${companyId}` };
    }
    async updateStartingDate(customerId, companyId, startingDate) {
        const relation = await this.customerCompanyRepo.findOne({
            where: { Customerid: customerId, Companyid: companyId },
        });
        if (!relation) {
            throw new common_1.NotFoundException(`Relation between customer ${customerId} and company ${companyId} not found`);
        }
        relation.startingDate = startingDate;
        return this.customerCompanyRepo.save(relation);
    }
};
exports.CustomerCompanyService = CustomerCompanyService;
exports.CustomerCompanyService = CustomerCompanyService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(customer_company_entity_1.CustomerCompany)),
    __param(1, (0, typeorm_1.InjectRepository)(customer_entity_1.Customer)),
    __param(2, (0, typeorm_1.InjectRepository)(company_entity_1.Company)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], CustomerCompanyService);
//# sourceMappingURL=customer_company.service.js.map