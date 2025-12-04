"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnderGovernorateModule = void 0;
const common_1 = require("@nestjs/common");
const under_governorate_service_1 = require("./under-governorate.service");
const under_governorate_controller_1 = require("./under-governorate.controller");
const typeorm_1 = require("@nestjs/typeorm");
const under_governorate_entity_1 = require("./entities/under-governorate.entity");
let UnderGovernorateModule = class UnderGovernorateModule {
};
exports.UnderGovernorateModule = UnderGovernorateModule;
exports.UnderGovernorateModule = UnderGovernorateModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([under_governorate_entity_1.UnderGovernorate])],
        controllers: [under_governorate_controller_1.UnderGovernorateController],
        providers: [under_governorate_service_1.UnderGovernorateService],
    })
], UnderGovernorateModule);
//# sourceMappingURL=under-governorate.module.js.map