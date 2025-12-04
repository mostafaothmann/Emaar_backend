"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PStatusModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const p_status_controller_1 = require("./p-status.controller");
const p_status_entity_1 = require("./entities/p-status.entity");
const p_status_service_1 = require("./p-status.service");
let PStatusModule = class PStatusModule {
};
exports.PStatusModule = PStatusModule;
exports.PStatusModule = PStatusModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([p_status_entity_1.PStatus])],
        providers: [p_status_service_1.PStatusService],
        controllers: [p_status_controller_1.PStatusController],
    })
], PStatusModule);
//# sourceMappingURL=p-status.module.js.map