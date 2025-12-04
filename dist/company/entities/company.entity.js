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
exports.Company = void 0;
const governorate_entity_1 = require("../../governorate/entities/governorate.entity");
const role_enum_1 = require("./../../auth/enums/role.enum");
const typeofcompany_entity_1 = require("../../typeofcompany/entities/typeofcompany.entity");
const typeorm_1 = require("typeorm");
const under_governorate_entity_1 = require("../../under-governorate/entities/under-governorate.entity");
let Company = class Company {
    id;
    firstName;
    creatingDate;
    lastName;
    email;
    secondPhone;
    photo;
    phone;
    instaLink;
    facebookLink;
    linkedinLink;
    websiteLink;
    description;
    location;
    password;
    role;
    typeOfCompanyId;
    governorateId;
    undergovernorateId;
    typeOfCompany;
    governorate;
    undergovernorate;
    isActive;
};
exports.Company = Company;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Company.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'char', length: 255, nullable: true }),
    __metadata("design:type", String)
], Company.prototype, "firstName", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', nullable: true }),
    __metadata("design:type", Date)
], Company.prototype, "creatingDate", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], Company.prototype, "lastName", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true, unique: true }),
    __metadata("design:type", String)
], Company.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', nullable: true }),
    __metadata("design:type", Number)
], Company.prototype, "secondPhone", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], Company.prototype, "photo", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true, unique: true }),
    __metadata("design:type", String)
], Company.prototype, "phone", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], Company.prototype, "instaLink", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], Company.prototype, "facebookLink", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], Company.prototype, "linkedinLink", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], Company.prototype, "websiteLink", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], Company.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], Company.prototype, "location", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], Company.prototype, "password", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "enum",
        enum: role_enum_1.ROLE,
        default: role_enum_1.ROLE.COMPANY
    }),
    __metadata("design:type", String)
], Company.prototype, "role", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Number)
], Company.prototype, "typeOfCompanyId", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Number)
], Company.prototype, "governorateId", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Number)
], Company.prototype, "undergovernorateId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => typeofcompany_entity_1.TypeOfCompany),
    (0, typeorm_1.JoinColumn)({ name: 'typeOfCompanyId' }),
    __metadata("design:type", typeofcompany_entity_1.TypeOfCompany)
], Company.prototype, "typeOfCompany", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => governorate_entity_1.Governorate),
    (0, typeorm_1.JoinColumn)({ name: 'governorateId' }),
    __metadata("design:type", governorate_entity_1.Governorate)
], Company.prototype, "governorate", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => under_governorate_entity_1.UnderGovernorate),
    (0, typeorm_1.JoinColumn)({ name: 'undergovernorateId' }),
    __metadata("design:type", under_governorate_entity_1.UnderGovernorate)
], Company.prototype, "undergovernorate", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'smallint', nullable: true }),
    __metadata("design:type", Boolean)
], Company.prototype, "isActive", void 0);
exports.Company = Company = __decorate([
    (0, typeorm_1.Entity)()
], Company);
//# sourceMappingURL=company.entity.js.map