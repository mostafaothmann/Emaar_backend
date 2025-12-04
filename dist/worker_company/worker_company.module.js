"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkerCompanyModule = void 0;
const common_1 = require("@nestjs/common");
const worker_company_service_1 = require("./worker_company.service");
const worker_company_controller_1 = require("./worker_company.controller");
const typeorm_1 = require("@nestjs/typeorm");
const worker_company_entity_1 = require("./entities/worker_company.entity");
const company_entity_1 = require("../company/entities/company.entity");
const worker_entity_1 = require("../worker/entities/worker.entity");
let WorkerCompanyModule = class WorkerCompanyModule {
};
exports.WorkerCompanyModule = WorkerCompanyModule;
exports.WorkerCompanyModule = WorkerCompanyModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([worker_company_entity_1.WorkerCompany, worker_entity_1.Worker, company_entity_1.Company])],
        controllers: [worker_company_controller_1.WorkerCompanyController],
        providers: [worker_company_service_1.WorkerCompanyService],
    })
], WorkerCompanyModule);
//# sourceMappingURL=worker_company.module.js.map