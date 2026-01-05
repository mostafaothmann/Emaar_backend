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
const typeofproperty_module_1 = require("./typeofproperty/typeofproperty.module");
const customer_module_1 = require("./customer/customer.module");
const customer_company_module_1 = require("./customer_company/customer_company.module");
const typeofmaterial_module_1 = require("./typeofmaterial/typeofmaterial.module");
const typeofownering_module_1 = require("./typeofwnering/typeofownering.module");
const auth_module_1 = require("./auth/auth.module");
const governorate_module_1 = require("./governorate/governorate.module");
const under_governorate_module_1 = require("./under-governorate/under-governorate.module");
const platform_express_1 = require("@nestjs/platform-express");
const image_controller_1 = require("./image.controller");
const cloudinary_service_1 = require("./cloudinary.service");
const videoofproperty_entity_1 = require("./videoofproperty/entities/videoofproperty.entity");
require("dotenv").config();
const DBurl = `mysql://${process.env.MYSQLUSER}:${process.env.MYSQL_PASSWORD}@${process.env.MYSQLHOST}:${process.env.MYSQLPORT}/${process.env.MYSQL_DATABASE}?ssl-mode=REQUIRED`;
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            platform_express_1.MulterModule.register({ dest: './uploads' }),
            typeorm_1.TypeOrmModule.forRoot({
                type: 'mysql',
                url: DBurl,
                autoLoadEntities: true,
                synchronize: true,
            }),
            under_governorate_module_1.UnderGovernorateModule, governorate_module_1.GovernorateModule,
            auth_module_1.AuthModule, customer_company_module_1.CustomerCompanyModule, customer_module_1.CustomerModule, videoofproperty_entity_1.VideoOfProperty, company_module_1.CompanyModule, typeofcompany_module_1.TypeOfCompanyModule, typeofownering_module_1.TypeofOwneringModule, typeofmaterial_module_1.TypeofmaterialModule, typeofproperty_module_1.TypeofpropertyModule
        ],
        controllers: [app_controller_1.AppController, image_controller_1.ImageController],
        providers: [app_service_1.AppService, cloudinary_service_1.CloudinaryService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map