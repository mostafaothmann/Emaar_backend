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
exports.CustomerPropertyOfferService = void 0;
const customer_property_offer_entity_1 = require("./entities/customer-property-offer.entity");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
let CustomerPropertyOfferService = class CustomerPropertyOfferService {
    customerPropertyOfferRepository;
    constructor(customerPropertyOfferRepository) {
        this.customerPropertyOfferRepository = customerPropertyOfferRepository;
    }
    async create(data) {
        const offer = this.customerPropertyOfferRepository.create(data);
        return this.customerPropertyOfferRepository.save(offer);
    }
    async findAll() {
        return this.customerPropertyOfferRepository.find({
            relations: ['customer', 'property'],
        });
    }
    async findOne(customerId, propertyId) {
        const offer = await this.customerPropertyOfferRepository.findOne({
            where: { Customerid: customerId, Propertyid: propertyId },
            relations: ['customer', 'property'],
        });
        if (!offer) {
            throw new common_1.NotFoundException(`Offer not found for customer ${customerId} and property ${propertyId}`);
        }
        return offer;
    }
    async update(customerId, propertyId, data) {
        const offer = await this.findOne(customerId, propertyId);
        Object.assign(offer, data);
        return this.customerPropertyOfferRepository.save(offer);
    }
    async remove(custoemrId, propertyId) {
        const offer = await this.findOne(custoemrId, propertyId);
        await this.customerPropertyOfferRepository.remove(offer);
    }
    async findOffersByCustomer(customerId) {
        return this.customerPropertyOfferRepository.find({
            where: { customer: { id: customerId } },
            relations: ['customer', 'property'],
        });
    }
};
exports.CustomerPropertyOfferService = CustomerPropertyOfferService;
exports.CustomerPropertyOfferService = CustomerPropertyOfferService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(customer_property_offer_entity_1.CustomerPropertyOffer)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], CustomerPropertyOfferService);
//# sourceMappingURL=customer-property-offer.service.js.map