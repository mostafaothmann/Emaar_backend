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
exports.CustomerCompany = void 0;
const company_entity_1 = require("../../company/entities/company.entity");
const customer_entity_1 = require("../../customer/entities/customer.entity");
const typeorm_1 = require("typeorm");
let CustomerCompany = class CustomerCompany {
    Customerid;
    Companyid;
    customer;
    company;
    startingDate;
};
exports.CustomerCompany = CustomerCompany;
__decorate([
    (0, typeorm_1.PrimaryColumn)(),
    __metadata("design:type", Number)
], CustomerCompany.prototype, "Customerid", void 0);
__decorate([
    (0, typeorm_1.PrimaryColumn)(),
    __metadata("design:type", Number)
], CustomerCompany.prototype, "Companyid", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => customer_entity_1.Customer, { onDelete: 'CASCADE' }),
    (0, typeorm_1.JoinColumn)({ name: 'Customerid' }),
    __metadata("design:type", customer_entity_1.Customer)
], CustomerCompany.prototype, "customer", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => company_entity_1.Company, { onDelete: 'CASCADE' }),
    (0, typeorm_1.JoinColumn)({ name: 'Companyid' }),
    __metadata("design:type", company_entity_1.Company)
], CustomerCompany.prototype, "company", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', nullable: true }),
    __metadata("design:type", Date)
], CustomerCompany.prototype, "startingDate", void 0);
exports.CustomerCompany = CustomerCompany = __decorate([
    (0, typeorm_1.Entity)()
], CustomerCompany);
//# sourceMappingURL=customer_company.entity.js.map