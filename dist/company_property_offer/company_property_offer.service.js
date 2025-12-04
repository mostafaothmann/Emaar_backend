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
exports.CompanyPropertyOfferService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const company_property_offer_entity_1 = require("./entities/company_property_offer.entity");
let CompanyPropertyOfferService = class CompanyPropertyOfferService {
    offerRepository;
    constructor(offerRepository) {
        this.offerRepository = offerRepository;
    }
    async create(data) {
        const offer = this.offerRepository.create(data);
        return this.offerRepository.save(offer);
    }
    async findAll() {
        return this.offerRepository.find({
            relations: ['company', 'property'],
        });
    }
    async findOne(companyId, propertyId) {
        const offer = await this.offerRepository.findOne({
            where: { Companyid: companyId, Propertyid: propertyId },
            relations: ['company', 'property'],
        });
        if (!offer) {
            throw new common_1.NotFoundException(`Offer not found for company ${companyId} and property ${propertyId}`);
        }
        return offer;
    }
    async update(companyId, propertyId, data) {
        const offer = await this.findOne(companyId, propertyId);
        Object.assign(offer, data);
        return this.offerRepository.save(offer);
    }
    async remove(companyId, propertyId) {
        const offer = await this.findOne(companyId, propertyId);
        await this.offerRepository.remove(offer);
    }
};
exports.CompanyPropertyOfferService = CompanyPropertyOfferService;
exports.CompanyPropertyOfferService = CompanyPropertyOfferService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(company_property_offer_entity_1.CompanyPropertyOffer)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], CompanyPropertyOfferService);
//# sourceMappingURL=company_property_offer.service.js.map