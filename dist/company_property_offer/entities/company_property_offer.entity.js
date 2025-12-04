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
exports.CompanyPropertyOffer = void 0;
const property_entity_1 = require("../../property/entities/property.entity");
const company_entity_1 = require("./../../company/entities/company.entity");
const typeorm_1 = require("typeorm");
let CompanyPropertyOffer = class CompanyPropertyOffer {
    Companyid;
    Propertyid;
    date;
    budget;
    description;
    customer_comment;
    isActive;
    endDate;
    company;
    property;
};
exports.CompanyPropertyOffer = CompanyPropertyOffer;
__decorate([
    (0, typeorm_1.PrimaryColumn)(),
    __metadata("design:type", Number)
], CompanyPropertyOffer.prototype, "Companyid", void 0);
__decorate([
    (0, typeorm_1.PrimaryColumn)(),
    __metadata("design:type", Number)
], CompanyPropertyOffer.prototype, "Propertyid", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', nullable: true }),
    __metadata("design:type", Date)
], CompanyPropertyOffer.prototype, "date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', nullable: true }),
    __metadata("design:type", Number)
], CompanyPropertyOffer.prototype, "budget", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], CompanyPropertyOffer.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], CompanyPropertyOffer.prototype, "customer_comment", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'smallint', nullable: true }),
    __metadata("design:type", Number)
], CompanyPropertyOffer.prototype, "isActive", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', nullable: true }),
    __metadata("design:type", Date)
], CompanyPropertyOffer.prototype, "endDate", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => company_entity_1.Company, (company) => company.id),
    (0, typeorm_1.JoinColumn)({ name: 'Companyid' }),
    __metadata("design:type", company_entity_1.Company)
], CompanyPropertyOffer.prototype, "company", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => property_entity_1.Property, (property) => property.id),
    (0, typeorm_1.JoinColumn)({ name: 'Propertyid' }),
    __metadata("design:type", property_entity_1.Property)
], CompanyPropertyOffer.prototype, "property", void 0);
exports.CompanyPropertyOffer = CompanyPropertyOffer = __decorate([
    (0, typeorm_1.Entity)()
], CompanyPropertyOffer);
//# sourceMappingURL=company_property_offer.entity.js.map