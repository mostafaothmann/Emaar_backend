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
exports.TypeOfWorkService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const typeofwork_entity_1 = require("./entities/typeofwork.entity");
let TypeOfWorkService = class TypeOfWorkService {
    typeOfWorkRepo;
    constructor(typeOfWorkRepo) {
        this.typeOfWorkRepo = typeOfWorkRepo;
    }
    async create(data) {
        const typeOfWork = this.typeOfWorkRepo.create(data);
        return this.typeOfWorkRepo.save(typeOfWork);
    }
    async findAll() {
        return this.typeOfWorkRepo.find();
    }
    async findOne(id) {
        const typeOfWork = await this.typeOfWorkRepo.findOne({ where: { id } });
        if (!typeOfWork)
            throw new common_1.NotFoundException(`TypeOfWork ${id} not found`);
        return typeOfWork;
    }
    async update(id, data) {
        const typeOfWork = await this.findOne(id);
        Object.assign(typeOfWork, data);
        return this.typeOfWorkRepo.save(typeOfWork);
    }
    async remove(id) {
        const result = await this.typeOfWorkRepo.delete(id);
        if (result.affected === 0) {
            throw new common_1.NotFoundException(`TypeOfWork ${id} not found`);
        }
        return { message: `TypeOfWork ${id} deleted successfully` };
    }
};
exports.TypeOfWorkService = TypeOfWorkService;
exports.TypeOfWorkService = TypeOfWorkService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(typeofwork_entity_1.TypeOfWork)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], TypeOfWorkService);
//# sourceMappingURL=typeofwork.service.js.map