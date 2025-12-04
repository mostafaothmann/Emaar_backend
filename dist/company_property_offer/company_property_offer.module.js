"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompanyPropertyOfferModule = void 0;
const common_1 = require("@nestjs/common");
const company_property_offer_service_1 = require("./company_property_offer.service");
const company_property_offer_controller_1 = require("./company_property_offer.controller");
const typeorm_1 = require("@nestjs/typeorm");
const company_property_offer_entity_1 = require("./entities/company_property_offer.entity");
const property_entity_1 = require("../property/entities/property.entity");
const company_entity_1 = require("../company/entities/company.entity");
let CompanyPropertyOfferModule = class CompanyPropertyOfferModule {
};
exports.CompanyPropertyOfferModule = CompanyPropertyOfferModule;
exports.CompanyPropertyOfferModule = CompanyPropertyOfferModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([company_property_offer_entity_1.CompanyPropertyOffer, property_entity_1.Property, company_entity_1.Company])],
        controllers: [company_property_offer_controller_1.CompanyPropertyOfferController],
        providers: [company_property_offer_service_1.CompanyPropertyOfferService],
    })
], CompanyPropertyOfferModule);
//# sourceMappingURL=company_property_offer.module.js.map