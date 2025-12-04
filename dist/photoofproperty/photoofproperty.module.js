"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PhotoofpropertyModule = void 0;
const common_1 = require("@nestjs/common");
const photoofproperty_controller_1 = require("./photoofproperty.controller");
const photoofproperty_service_1 = require("./photoofproperty.service");
const typeorm_1 = require("@nestjs/typeorm");
const photoofproperty_entity_1 = require("./entities/photoofproperty.entity");
let PhotoofpropertyModule = class PhotoofpropertyModule {
};
exports.PhotoofpropertyModule = PhotoofpropertyModule;
exports.PhotoofpropertyModule = PhotoofpropertyModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([photoofproperty_entity_1.PhotoOfProperty])],
        controllers: [photoofproperty_controller_1.PhotoofpropertyController],
        providers: [photoofproperty_service_1.PhotoOfPropertyService],
    })
], PhotoofpropertyModule);
//# sourceMappingURL=photoofproperty.module.js.map