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
exports.UnderGovernorate = void 0;
const company_entity_1 = require("../../company/entities/company.entity");
const typeorm_1 = require("typeorm");
let UnderGovernorate = class UnderGovernorate {
    id;
    name;
    companies;
};
exports.UnderGovernorate = UnderGovernorate;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], UnderGovernorate.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'char', length: 255, nullable: true }),
    __metadata("design:type", String)
], UnderGovernorate.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => company_entity_1.Company, company => company.governorate),
    __metadata("design:type", Array)
], UnderGovernorate.prototype, "companies", void 0);
exports.UnderGovernorate = UnderGovernorate = __decorate([
    (0, typeorm_1.Entity)()
], UnderGovernorate);
//# sourceMappingURL=under-governorate.entity.js.map