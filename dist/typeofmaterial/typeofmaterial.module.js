"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TypeofmaterialModule = void 0;
const common_1 = require("@nestjs/common");
const typeofmaterial_controller_1 = require("./typeofmaterial.controller");
const typeofmaterial_service_1 = require("./typeofmaterial.service");
const typeorm_1 = require("@nestjs/typeorm");
const typeofmaterial_entity_1 = require("./entities/typeofmaterial.entity");
let TypeofmaterialModule = class TypeofmaterialModule {
};
exports.TypeofmaterialModule = TypeofmaterialModule;
exports.TypeofmaterialModule = TypeofmaterialModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([typeofmaterial_entity_1.TypeOfMaterial])],
        controllers: [typeofmaterial_controller_1.TypeofmaterialController],
        providers: [typeofmaterial_service_1.TypeOfMaterialService],
    })
], TypeofmaterialModule);
//# sourceMappingURL=typeofmaterial.module.js.map