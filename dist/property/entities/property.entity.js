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
exports.Property = void 0;
const customer_property_offer_entity_1 = require("../../customer-property-offer/entities/customer-property-offer.entity");
const customer_entity_1 = require("../../customer/entities/customer.entity");
const p_status_entity_1 = require("../../p_status/entities/p-status.entity");
const typeofproperty_entity_1 = require("../../typeofproperty/entities/typeofproperty.entity");
const typeofownering_entity_1 = require("../../typeofwnering/entities/typeofownering.entity");
const typeofwork_entity_1 = require("../../typeofwork/entities/typeofwork.entity");
const typeorm_1 = require("typeorm");
let Property = class Property {
    id;
    height;
    minimum_budget;
    maximum_time;
    direction;
    location;
    age;
    description;
    area;
    isActive;
    typeOfPropertyId;
    typeOfOwneringId;
    typeOfWorkId;
    pstatusId;
    customerId;
    typeOfProperty;
    typeOfOwnering;
    typeOfWork;
    pstatus;
    customer;
    customerPropertiesOffer;
};
exports.Property = Property;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Property.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], Property.prototype, "height", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], Property.prototype, "minimum_budget", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], Property.prototype, "maximum_time", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], Property.prototype, "direction", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], Property.prototype, "location", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', nullable: true }),
    __metadata("design:type", Number)
], Property.prototype, "age", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], Property.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', nullable: true }),
    __metadata("design:type", Number)
], Property.prototype, "area", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'smallint', nullable: true }),
    __metadata("design:type", Number)
], Property.prototype, "isActive", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Number)
], Property.prototype, "typeOfPropertyId", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Number)
], Property.prototype, "typeOfOwneringId", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Number)
], Property.prototype, "typeOfWorkId", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Number)
], Property.prototype, "pstatusId", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Number)
], Property.prototype, "customerId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => typeofproperty_entity_1.TypeOfProperty),
    (0, typeorm_1.JoinColumn)({ name: 'typeOfPropertyId' }),
    __metadata("design:type", typeofproperty_entity_1.TypeOfProperty)
], Property.prototype, "typeOfProperty", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => typeofownering_entity_1.TypeOfOwnering),
    (0, typeorm_1.JoinColumn)({ name: 'typeOfOwneringId' }),
    __metadata("design:type", typeofownering_entity_1.TypeOfOwnering)
], Property.prototype, "typeOfOwnering", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => typeofwork_entity_1.TypeOfWork),
    (0, typeorm_1.JoinColumn)({ name: 'typeOfWorkId' }),
    __metadata("design:type", typeofwork_entity_1.TypeOfWork)
], Property.prototype, "typeOfWork", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => p_status_entity_1.PStatus),
    (0, typeorm_1.JoinColumn)({ name: 'pstatusId' }),
    __metadata("design:type", p_status_entity_1.PStatus)
], Property.prototype, "pstatus", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => customer_entity_1.Customer, { eager: false }),
    (0, typeorm_1.JoinColumn)({ name: 'customerId' }),
    __metadata("design:type", customer_entity_1.Customer)
], Property.prototype, "customer", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => customer_property_offer_entity_1.CustomerPropertyOffer, CustomerPropertyOffer => CustomerPropertyOffer.property),
    __metadata("design:type", Array)
], Property.prototype, "customerPropertiesOffer", void 0);
exports.Property = Property = __decorate([
    (0, typeorm_1.Entity)()
], Property);
//# sourceMappingURL=property.entity.js.map