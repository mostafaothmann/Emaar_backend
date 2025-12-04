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
exports.TypeOfWorkerService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const typeofworker_entity_1 = require("./entities/typeofworker.entity");
let TypeOfWorkerService = class TypeOfWorkerService {
    typeOfWorkerRepository;
    constructor(typeOfWorkerRepository) {
        this.typeOfWorkerRepository = typeOfWorkerRepository;
    }
    create(dto) {
        const type = this.typeOfWorkerRepository.create(dto);
        return this.typeOfWorkerRepository.save(type);
    }
    findAll() {
        return this.typeOfWorkerRepository.find();
    }
    findOne(id) {
        return this.typeOfWorkerRepository.findOneBy({ id });
    }
    async update(id, updateDto) {
        await this.typeOfWorkerRepository.update(id, updateDto);
        return this.findOne(id);
    }
    async remove(id) {
        await this.typeOfWorkerRepository.delete(id);
    }
};
exports.TypeOfWorkerService = TypeOfWorkerService;
exports.TypeOfWorkerService = TypeOfWorkerService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(typeofworker_entity_1.TypeOfWorker)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], TypeOfWorkerService);
//# sourceMappingURL=typeofworker.service.js.map