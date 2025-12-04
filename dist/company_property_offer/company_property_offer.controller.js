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
exports.CompanyPropertyOfferController = void 0;
const common_1 = require("@nestjs/common");
const company_property_offer_service_1 = require("./company_property_offer.service");
let CompanyPropertyOfferController = class CompanyPropertyOfferController {
    offerService;
    constructor(offerService) {
        this.offerService = offerService;
    }
    create(data) {
        return this.offerService.create(data);
    }
    findAll() {
        return this.offerService.findAll();
    }
    findOne(companyId, propertyId) {
        return this.offerService.findOne(companyId, propertyId);
    }
    update(companyId, propertyId, data) {
        return this.offerService.update(companyId, propertyId, data);
    }
    remove(companyId, propertyId) {
        return this.offerService.remove(companyId, propertyId);
    }
};
exports.CompanyPropertyOfferController = CompanyPropertyOfferController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], CompanyPropertyOfferController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CompanyPropertyOfferController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':companyId/:propertyId'),
    __param(0, (0, common_1.Param)('companyId')),
    __param(1, (0, common_1.Param)('propertyId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", void 0)
], CompanyPropertyOfferController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':companyId/:propertyId'),
    __param(0, (0, common_1.Param)('companyId')),
    __param(1, (0, common_1.Param)('propertyId')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, Object]),
    __metadata("design:returntype", void 0)
], CompanyPropertyOfferController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':companyId/:propertyId'),
    __param(0, (0, common_1.Param)('companyId')),
    __param(1, (0, common_1.Param)('propertyId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", void 0)
], CompanyPropertyOfferController.prototype, "remove", null);
exports.CompanyPropertyOfferController = CompanyPropertyOfferController = __decorate([
    (0, common_1.Controller)('company-property-offers'),
    __metadata("design:paramtypes", [company_property_offer_service_1.CompanyPropertyOfferService])
], CompanyPropertyOfferController);
//# sourceMappingURL=company_property_offer.controller.js.map