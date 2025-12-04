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
exports.CustomerPropertyOfferController = void 0;
const common_1 = require("@nestjs/common");
const customer_property_offer_service_1 = require("./customer-property-offer.service");
let CustomerPropertyOfferController = class CustomerPropertyOfferController {
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
    findOne(customerId, propertyId) {
        return this.offerService.findOne(customerId, propertyId);
    }
    update(customerId, propertyId, data) {
        return this.offerService.update(customerId, propertyId, data);
    }
    remove(customerId, propertyId) {
        return this.offerService.remove(customerId, propertyId);
    }
};
exports.CustomerPropertyOfferController = CustomerPropertyOfferController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], CustomerPropertyOfferController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CustomerPropertyOfferController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':customerId/:propertyId'),
    __param(0, (0, common_1.Param)('customerId', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Param)('propertyId', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", void 0)
], CustomerPropertyOfferController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':customerId/:propertyId'),
    __param(0, (0, common_1.Param)('customerId', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Param)('propertyId', common_1.ParseIntPipe)),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, Object]),
    __metadata("design:returntype", void 0)
], CustomerPropertyOfferController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':customerId/:propertyId'),
    __param(0, (0, common_1.Param)('customerId', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Param)('propertyId', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", void 0)
], CustomerPropertyOfferController.prototype, "remove", null);
exports.CustomerPropertyOfferController = CustomerPropertyOfferController = __decorate([
    (0, common_1.Controller)('customer-property-offer'),
    __metadata("design:paramtypes", [customer_property_offer_service_1.CustomerPropertyOfferService])
], CustomerPropertyOfferController);
//# sourceMappingURL=customer-property-offer.controller.js.map