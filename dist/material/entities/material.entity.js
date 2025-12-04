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
exports.Material = void 0;
const company_entity_1 = require("../../company/entities/company.entity");
const typeofmaterial_entity_1 = require("../../typeofmaterial/entities/typeofmaterial.entity");
const typeorm_1 = require("typeorm");
let Material = class Material {
    id;
    description;
    price_for_one;
    isActive;
    companyPhone;
    companyWhatsapp;
    Companyid;
    TypeOfMaterialid;
    company;
    typeOfMaterial;
};
exports.Material = Material;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Material.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], Material.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', nullable: true }),
    __metadata("design:type", Number)
], Material.prototype, "price_for_one", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'smallint', nullable: true }),
    __metadata("design:type", Number)
], Material.prototype, "isActive", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', nullable: false }),
    __metadata("design:type", Number)
], Material.prototype, "companyPhone", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', nullable: false }),
    __metadata("design:type", Number)
], Material.prototype, "companyWhatsapp", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', nullable: false }),
    __metadata("design:type", Number)
], Material.prototype, "Companyid", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', nullable: false }),
    __metadata("design:type", Number)
], Material.prototype, "TypeOfMaterialid", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => company_entity_1.Company, (company) => company.id, { nullable: true }),
    (0, typeorm_1.JoinColumn)({ name: 'Companyid' }),
    __metadata("design:type", company_entity_1.Company)
], Material.prototype, "company", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => typeofmaterial_entity_1.TypeOfMaterial),
    (0, typeorm_1.JoinColumn)({ name: 'TypeOfMaterialid' }),
    __metadata("design:type", typeofmaterial_entity_1.TypeOfMaterial)
], Material.prototype, "typeOfMaterial", void 0);
exports.Material = Material = __decorate([
    (0, typeorm_1.Entity)()
], Material);
//# sourceMappingURL=material.entity.js.map