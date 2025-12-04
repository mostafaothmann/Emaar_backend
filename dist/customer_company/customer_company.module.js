"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerCompanyModule = void 0;
const common_1 = require("@nestjs/common");
const customer_company_service_1 = require("./customer_company.service");
const customer_company_controller_1 = require("./customer_company.controller");
const typeorm_1 = require("@nestjs/typeorm");
const customer_company_entity_1 = require("./entities/customer_company.entity");
const customer_entity_1 = require("../customer/entities/customer.entity");
const company_entity_1 = require("../company/entities/company.entity");
let CustomerCompanyModule = class CustomerCompanyModule {
};
exports.CustomerCompanyModule = CustomerCompanyModule;
exports.CustomerCompanyModule = CustomerCompanyModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([customer_company_entity_1.CustomerCompany, customer_entity_1.Customer, company_entity_1.Company])],
        controllers: [customer_company_controller_1.CustomerCompanyController],
        providers: [customer_company_service_1.CustomerCompanyService],
    })
], CustomerCompanyModule);
//# sourceMappingURL=customer_company.module.js.map