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
exports.PhotoOfMaterial = void 0;
const material_entity_1 = require("../../material/entities/material.entity");
const typeorm_1 = require("typeorm");
let PhotoOfMaterial = class PhotoOfMaterial {
    id;
    photo;
    material;
};
exports.PhotoOfMaterial = PhotoOfMaterial;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], PhotoOfMaterial.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], PhotoOfMaterial.prototype, "photo", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => material_entity_1.Material, (material) => material.id, { nullable: true }),
    (0, typeorm_1.JoinColumn)({ name: 'Materialid' }),
    __metadata("design:type", material_entity_1.Material)
], PhotoOfMaterial.prototype, "material", void 0);
exports.PhotoOfMaterial = PhotoOfMaterial = __decorate([
    (0, typeorm_1.Entity)()
], PhotoOfMaterial);
//# sourceMappingURL=photoofmaterial.entity.js.map