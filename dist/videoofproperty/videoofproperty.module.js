"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VideoofpropertyModule = void 0;
const common_1 = require("@nestjs/common");
const videoofproperty_controller_1 = require("./videoofproperty.controller");
const videoofproperty_service_1 = require("./videoofproperty.service");
const typeorm_1 = require("@nestjs/typeorm");
const videoofproperty_entity_1 = require("./entities/videoofproperty.entity");
let VideoofpropertyModule = class VideoofpropertyModule {
};
exports.VideoofpropertyModule = VideoofpropertyModule;
exports.VideoofpropertyModule = VideoofpropertyModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([videoofproperty_entity_1.VideoOfProperty])],
        controllers: [videoofproperty_controller_1.VideoofpropertyController],
        providers: [videoofproperty_service_1.VideoOfPropertyService],
    })
], VideoofpropertyModule);
//# sourceMappingURL=videoofproperty.module.js.map