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
exports.WorkerCompanyService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const worker_entity_1 = require("../worker/entities/worker.entity");
const company_entity_1 = require("../company/entities/company.entity");
const worker_company_entity_1 = require("./entities/worker_company.entity");
let WorkerCompanyService = class WorkerCompanyService {
    workerCompanyRepo;
    workerRepo;
    companyRepo;
    constructor(workerCompanyRepo, workerRepo, companyRepo) {
        this.workerCompanyRepo = workerCompanyRepo;
        this.workerRepo = workerRepo;
        this.companyRepo = companyRepo;
    }
    async assignWorkerToCompany(workerId, companyId, startDate, endDate) {
        const worker = await this.workerRepo.findOne({ where: { id: workerId } });
        const company = await this.companyRepo.findOne({ where: { id: companyId } });
        if (!worker)
            throw new common_1.NotFoundException(`Worker ${workerId} not found`);
        if (!company)
            throw new common_1.NotFoundException(`Company ${companyId} not found`);
        const relation = this.workerCompanyRepo.create({
            Workerid: workerId,
            Companyid: companyId,
            startDate,
            endDate,
            worker,
            company,
        });
        return this.workerCompanyRepo.save(relation);
    }
    async updateAssignment(workerId, companyId, startDate, endDate) {
        const relation = await this.workerCompanyRepo.findOne({
            where: { Workerid: workerId, Companyid: companyId },
        });
        if (!relation) {
            throw new common_1.NotFoundException(`Relation Worker ${workerId} - Company ${companyId} not found`);
        }
        relation.startDate = startDate ?? relation.startDate;
        relation.endDate = endDate ?? relation.endDate;
        return this.workerCompanyRepo.save(relation);
    }
    async findAll() {
        return this.workerCompanyRepo.find({
            relations: ['worker', 'company'],
        });
    }
    async findByWorker(workerId) {
        return this.workerCompanyRepo.find({
            where: { Workerid: workerId },
            relations: ['company'],
        });
    }
    async findByCompany(companyId) {
        return this.workerCompanyRepo.find({
            where: { Companyid: companyId },
            relations: ['worker'],
        });
    }
    async removeAssignment(workerId, companyId) {
        await this.workerCompanyRepo.delete({ Workerid: workerId, Companyid: companyId });
        return { message: `Unlinked worker ${workerId} from company ${companyId}` };
    }
};
exports.WorkerCompanyService = WorkerCompanyService;
exports.WorkerCompanyService = WorkerCompanyService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(worker_company_entity_1.WorkerCompany)),
    __param(1, (0, typeorm_1.InjectRepository)(worker_entity_1.Worker)),
    __param(2, (0, typeorm_1.InjectRepository)(company_entity_1.Company)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], WorkerCompanyService);
//# sourceMappingURL=worker_company.service.js.map