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
exports.WorkerCompany = void 0;
const company_entity_1 = require("../../company/entities/company.entity");
const worker_entity_1 = require("./../../worker/entities/worker.entity");
const typeorm_1 = require("typeorm");
let WorkerCompany = class WorkerCompany {
    Workerid;
    Companyid;
    startDate;
    endDate;
    worker;
    company;
};
exports.WorkerCompany = WorkerCompany;
__decorate([
    (0, typeorm_1.PrimaryColumn)(),
    __metadata("design:type", Number)
], WorkerCompany.prototype, "Workerid", void 0);
__decorate([
    (0, typeorm_1.PrimaryColumn)(),
    __metadata("design:type", Number)
], WorkerCompany.prototype, "Companyid", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', nullable: true }),
    __metadata("design:type", Date)
], WorkerCompany.prototype, "startDate", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', nullable: true }),
    __metadata("design:type", Date)
], WorkerCompany.prototype, "endDate", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => worker_entity_1.Worker, worker => worker.id, { onDelete: 'CASCADE' }),
    (0, typeorm_1.JoinColumn)({ name: 'Workerid' }),
    __metadata("design:type", worker_entity_1.Worker)
], WorkerCompany.prototype, "worker", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => company_entity_1.Company, company => company.id, { onDelete: 'CASCADE' }),
    (0, typeorm_1.JoinColumn)({ name: 'Companyid' }),
    __metadata("design:type", company_entity_1.Company)
], WorkerCompany.prototype, "company", void 0);
exports.WorkerCompany = WorkerCompany = __decorate([
    (0, typeorm_1.Entity)()
], WorkerCompany);
//# sourceMappingURL=worker_company.entity.js.map