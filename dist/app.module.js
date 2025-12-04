"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const typeorm_1 = require("@nestjs/typeorm");
const company_module_1 = require("./company/company.module");
const typeofcompany_module_1 = require("./typeofcompany/typeofcompany.module");
const p_status_module_1 = require("./p_status/p-status.module");
const typeofproperty_module_1 = require("./typeofproperty/typeofproperty.module");
const typeofworker_module_1 = require("./typeofworker/typeofworker.module");
const worker_module_1 = require("./worker/worker.module");
const customer_module_1 = require("./customer/customer.module");
const customer_company_module_1 = require("./customer_company/customer_company.module");
const material_module_1 = require("./material/material.module");
const typeofmaterial_module_1 = require("./typeofmaterial/typeofmaterial.module");
const typeofwork_module_1 = require("./typeofwork/typeofwork.module");
const typeofownering_module_1 = require("./typeofwnering/typeofownering.module");
const property_module_1 = require("./property/property.module");
const videoofproperty_module_1 = require("./videoofproperty/videoofproperty.module");
const photoofproperty_module_1 = require("./photoofproperty/photoofproperty.module");
const worker_company_module_1 = require("./worker_company/worker_company.module");
const company_property_offer_module_1 = require("./company_property_offer/company_property_offer.module");
const auth_module_1 = require("./auth/auth.module");
const customer_property_offer_module_1 = require("./customer-property-offer/customer-property-offer.module");
const governorate_module_1 = require("./governorate/governorate.module");
const under_governorate_module_1 = require("./under-governorate/under-governorate.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forRoot({
                type: 'mysql',
                host: process.env.DB_HOST,
                port: Number(process.env.DB_PORT),
                username: process.env.DB_USERNAME,
                password: process.env.DB_PASSWORD,
                database: process.env.DB_NAME,
                autoLoadEntities: true,
                synchronize: true,
            }),
            p_status_module_1.PStatusModule,
            company_module_1.CompanyModule,
            typeofcompany_module_1.TypeOfCompanyModule,
            typeofproperty_module_1.TypeofpropertyModule,
            typeofwork_module_1.TypeofworkModule,
            typeofownering_module_1.TypeofOwneringModule,
            videoofproperty_module_1.VideoofpropertyModule,
            photoofproperty_module_1.PhotoofpropertyModule,
            typeofworker_module_1.TypeofworkerModule,
            worker_module_1.WorkerModule,
            customer_module_1.CustomerModule,
            customer_company_module_1.CustomerCompanyModule,
            property_module_1.PropertyModule,
            material_module_1.MaterialModule,
            typeofmaterial_module_1.TypeofmaterialModule,
            governorate_module_1.GovernorateModule,
            under_governorate_module_1.UnderGovernorateModule,
            worker_company_module_1.WorkerCompanyModule,
            company_property_offer_module_1.CompanyPropertyOfferModule,
            auth_module_1.AuthModule,
            customer_property_offer_module_1.CustomerPropertyOfferModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map