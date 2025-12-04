"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerPropertyOfferModule = void 0;
const common_1 = require("@nestjs/common");
const customer_property_offer_controller_1 = require("./customer-property-offer.controller");
const customer_property_offer_service_1 = require("./customer-property-offer.service");
const typeorm_1 = require("@nestjs/typeorm");
const customer_property_offer_entity_1 = require("./entities/customer-property-offer.entity");
const property_entity_1 = require("../property/entities/property.entity");
const customer_entity_1 = require("../customer/entities/customer.entity");
let CustomerPropertyOfferModule = class CustomerPropertyOfferModule {
};
exports.CustomerPropertyOfferModule = CustomerPropertyOfferModule;
exports.CustomerPropertyOfferModule = CustomerPropertyOfferModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([customer_property_offer_entity_1.CustomerPropertyOffer, property_entity_1.Property, customer_entity_1.Customer])],
        controllers: [customer_property_offer_controller_1.CustomerPropertyOfferController],
        providers: [customer_property_offer_service_1.CustomerPropertyOfferService],
        exports: [customer_property_offer_service_1.CustomerPropertyOfferService]
    })
], CustomerPropertyOfferModule);
//# sourceMappingURL=customer-property-offer.module.js.map