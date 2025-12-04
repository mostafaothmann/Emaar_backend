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
exports.TypeOfCompanyService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const typeofcompany_entity_1 = require("./entities/typeofcompany.entity");
let TypeOfCompanyService = class TypeOfCompanyService {
    typeOfCompanyRepository;
    constructor(typeOfCompanyRepository) {
        this.typeOfCompanyRepository = typeOfCompanyRepository;
    }
    create(dto) {
        const type = this.typeOfCompanyRepository.create(dto);
        return this.typeOfCompanyRepository.save(type);
    }
    findAll() {
        return this.typeOfCompanyRepository.find();
    }
    findOne(id) {
        return this.typeOfCompanyRepository.findOneBy({ id });
    }
    async update(id, updateDto) {
        await this.typeOfCompanyRepository.update(id, updateDto);
        return this.findOne(id);
    }
    async remove(id) {
        await this.typeOfCompanyRepository.delete(id);
    }
};
exports.TypeOfCompanyService = TypeOfCompanyService;
exports.TypeOfCompanyService = TypeOfCompanyService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(typeofcompany_entity_1.TypeOfCompany)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], TypeOfCompanyService);
//# sourceMappingURL=typeofcompany.service.js.map