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
exports.CustomerCompanyController = void 0;
const common_1 = require("@nestjs/common");
const customer_company_service_1 = require("./customer_company.service");
let CustomerCompanyController = class CustomerCompanyController {
    service;
    constructor(service) {
        this.service = service;
    }
    async link(customerId, companyId, startingDate) {
        return this.service.linkCustomerToCompany(+customerId, +companyId, startingDate ? new Date(startingDate) : undefined);
    }
    async findAll() {
        return this.service.findAll();
    }
    async findByCustomer(customerId) {
        return this.service.findByCustomer(+customerId);
    }
    async findByCompany(companyId) {
        return this.service.findByCompany(+companyId);
    }
    async unlink(customerId, companyId) {
        return this.service.unlinkCustomerFromCompany(+customerId, +companyId);
    }
    async updateStartingDate(customerId, companyId, startingDate) {
        return this.service.updateStartingDate(+customerId, +companyId, new Date(startingDate));
    }
};
exports.CustomerCompanyController = CustomerCompanyController;
__decorate([
    (0, common_1.Post)(':customerId/:companyId'),
    __param(0, (0, common_1.Param)('customerId')),
    __param(1, (0, common_1.Param)('companyId')),
    __param(2, (0, common_1.Body)('startingDate')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, String]),
    __metadata("design:returntype", Promise)
], CustomerCompanyController.prototype, "link", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CustomerCompanyController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('customer/:customerId'),
    __param(0, (0, common_1.Param)('customerId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], CustomerCompanyController.prototype, "findByCustomer", null);
__decorate([
    (0, common_1.Get)('company/:companyId'),
    __param(0, (0, common_1.Param)('companyId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], CustomerCompanyController.prototype, "findByCompany", null);
__decorate([
    (0, common_1.Delete)(':customerId/:companyId'),
    __param(0, (0, common_1.Param)('customerId')),
    __param(1, (0, common_1.Param)('companyId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Promise)
], CustomerCompanyController.prototype, "unlink", null);
__decorate([
    (0, common_1.Patch)(':customerId/:companyId'),
    __param(0, (0, common_1.Param)('customerId')),
    __param(1, (0, common_1.Param)('companyId')),
    __param(2, (0, common_1.Body)('startingDate')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, String]),
    __metadata("design:returntype", Promise)
], CustomerCompanyController.prototype, "updateStartingDate", null);
exports.CustomerCompanyController = CustomerCompanyController = __decorate([
    (0, common_1.Controller)('customer-company'),
    __metadata("design:paramtypes", [customer_company_service_1.CustomerCompanyService])
], CustomerCompanyController);
//# sourceMappingURL=customer_company.controller.js.map