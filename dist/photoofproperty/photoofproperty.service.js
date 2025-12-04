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
exports.PhotoOfPropertyService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const photoofproperty_entity_1 = require("./entities/photoofproperty.entity");
const typeorm_2 = require("typeorm");
let PhotoOfPropertyService = class PhotoOfPropertyService {
    photoOfPropertyRepository;
    constructor(photoOfPropertyRepository) {
        this.photoOfPropertyRepository = photoOfPropertyRepository;
    }
    create(dto) {
        const photo = this.photoOfPropertyRepository.create(dto);
        return this.photoOfPropertyRepository.save(photo);
    }
    findAll() {
        return this.photoOfPropertyRepository.find();
    }
    findOne(id) {
        return this.photoOfPropertyRepository.findOneBy({ id });
    }
    async update(id, updateDto) {
        await this.photoOfPropertyRepository.update(id, updateDto);
        return this.findOne(id);
    }
    async remove(id) {
        await this.photoOfPropertyRepository.delete(id);
    }
};
exports.PhotoOfPropertyService = PhotoOfPropertyService;
exports.PhotoOfPropertyService = PhotoOfPropertyService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(photoofproperty_entity_1.PhotoOfProperty)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], PhotoOfPropertyService);
//# sourceMappingURL=photoofproperty.service.js.map