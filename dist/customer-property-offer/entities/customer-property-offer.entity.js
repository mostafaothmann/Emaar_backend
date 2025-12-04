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
exports.CustomerPropertyOffer = void 0;
const customer_entity_1 = require("./../../customer/entities/customer.entity");
const property_entity_1 = require("../../property/entities/property.entity");
const typeorm_1 = require("typeorm");
let CustomerPropertyOffer = class CustomerPropertyOffer {
    Customerid;
    Propertyid;
    date;
    budget;
    description;
    owner_customer_comment;
    isActive;
    endDate;
    customer;
    property;
};
exports.CustomerPropertyOffer = CustomerPropertyOffer;
__decorate([
    (0, typeorm_1.PrimaryColumn)(),
    __metadata("design:type", Number)
], CustomerPropertyOffer.prototype, "Customerid", void 0);
__decorate([
    (0, typeorm_1.PrimaryColumn)(),
    __metadata("design:type", Number)
], CustomerPropertyOffer.prototype, "Propertyid", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', nullable: true }),
    __metadata("design:type", Date)
], CustomerPropertyOffer.prototype, "date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', nullable: true }),
    __metadata("design:type", Number)
], CustomerPropertyOffer.prototype, "budget", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], CustomerPropertyOffer.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], CustomerPropertyOffer.prototype, "owner_customer_comment", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'smallint', nullable: true }),
    __metadata("design:type", Number)
], CustomerPropertyOffer.prototype, "isActive", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', nullable: true }),
    __metadata("design:type", Date)
], CustomerPropertyOffer.prototype, "endDate", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => customer_entity_1.Customer, (customer) => customer.id),
    (0, typeorm_1.JoinColumn)({ name: 'Customerid' }),
    __metadata("design:type", customer_entity_1.Customer)
], CustomerPropertyOffer.prototype, "customer", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => property_entity_1.Property, (property) => property.id),
    (0, typeorm_1.JoinColumn)({ name: 'Propertyid' }),
    __metadata("design:type", property_entity_1.Property)
], CustomerPropertyOffer.prototype, "property", void 0);
exports.CustomerPropertyOffer = CustomerPropertyOffer = __decorate([
    (0, typeorm_1.Entity)()
], CustomerPropertyOffer);
//# sourceMappingURL=customer-property-offer.entity.js.map