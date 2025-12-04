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
exports.PStatusService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const p_status_entity_1 = require("./entities/p-status.entity");
let PStatusService = class PStatusService {
    pStatusRepository;
    constructor(pStatusRepository) {
        this.pStatusRepository = pStatusRepository;
    }
    async create(dto) {
        const entity = this.pStatusRepository.create(dto);
        return await this.pStatusRepository.save(entity);
    }
    async findAll() {
        return await this.pStatusRepository.find();
    }
    async findOne(id) {
        const item = await this.pStatusRepository.findOne({ where: { id } });
        if (!item) {
            throw new common_1.NotFoundException(`PStatus with ID ${id} not found`);
        }
        return item;
    }
    async update(id, dto) {
        await this.pStatusRepository.update(id, dto);
        return this.findOne(id);
    }
    async remove(id) {
        const result = await this.pStatusRepository.delete(id);
        if (result.affected === 0) {
            throw new common_1.NotFoundException(`PStatus with ID ${id} not found`);
        }
    }
};
exports.PStatusService = PStatusService;
exports.PStatusService = PStatusService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(p_status_entity_1.PStatus)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], PStatusService);
//# sourceMappingURL=p-status.service.js.map