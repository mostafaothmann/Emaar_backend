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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkerCompanyController = void 0;
const common_1 = require("@nestjs/common");
const worker_company_service_1 = require("./worker_company.service");
let WorkerCompanyController = class WorkerCompanyController {
    workerCompanyService;
    constructor(workerCompanyService) {
        this.workerCompanyService = workerCompanyService;
    }
    assign(workerId, companyId, startDate, endDate) {
        return this.workerCompanyService.assignWorkerToCompany(+workerId, +companyId, startDate, endDate);
    }
    update(workerId, companyId, startDate, endDate) {
        return this.workerCompanyService.updateAssignment(+workerId, +companyId, startDate, endDate);
    }
    findAll() {
        return this.workerCompanyService.findAll();
    }
    findByWorker(workerId) {
        return this.workerCompanyService.findByWorker(+workerId);
    }
    findByCompany(companyId) {
        return this.workerCompanyService.findByCompany(+companyId);
    }
    remove(workerId, companyId) {
        return this.workerCompanyService.removeAssignment(+workerId, +companyId);
    }
};
exports.WorkerCompanyController = WorkerCompanyController;
__decorate([
    (0, common_1.Post)(':workerId/:companyId'),
    __param(0, (0, common_1.Param)('workerId')),
    __param(1, (0, common_1.Param)('companyId')),
    __param(2, (0, common_1.Body)('startDate')),
    __param(3, (0, common_1.Body)('endDate')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, Date,
        Date]),
    __metadata("design:returntype", void 0)
], WorkerCompanyController.prototype, "assign", null);
__decorate([
    (0, common_1.Patch)(':workerId/:companyId'),
    __param(0, (0, common_1.Param)('workerId')),
    __param(1, (0, common_1.Param)('companyId')),
    __param(2, (0, common_1.Body)('startDate')),
    __param(3, (0, common_1.Body)('endDate')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, Date,
        Date]),
    __metadata("design:returntype", void 0)
], WorkerCompanyController.prototype, "update", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], WorkerCompanyController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('worker/:workerId'),
    __param(0, (0, common_1.Param)('workerId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], WorkerCompanyController.prototype, "findByWorker", null);
__decorate([
    (0, common_1.Get)('company/:companyId'),
    __param(0, (0, common_1.Param)('companyId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], WorkerCompanyController.prototype, "findByCompany", null);
__decorate([
    (0, common_1.Delete)(':workerId/:companyId'),
    __param(0, (0, common_1.Param)('workerId')),
    __param(1, (0, common_1.Param)('companyId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", void 0)
], WorkerCompanyController.prototype, "remove", null);
exports.WorkerCompanyController = WorkerCompanyController = __decorate([
    (0, common_1.Controller)('worker-company'),
    __metadata("design:paramtypes", [worker_company_service_1.WorkerCompanyService])
], WorkerCompanyController);
//# sourceMappingURL=worker_company.controller.js.map