"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthModule = void 0;
const common_1 = require("@nestjs/common");
const auth_service_1 = require("./auth.service");
const auth_controller_1 = require("./auth.controller");
const customer_module_1 = require("../customer/customer.module");
const jwt_1 = require("@nestjs/jwt");
const jwt_secret_1 = require("./configs/jwt-secret");
const company_module_1 = require("../company/company.module");
const authCompany_controller_1 = require("./authCompany.controller");
const authCustomer_controller_1 = require("./authCustomer.controller");
const authWorker_controller_1 = require("./authWorker.controller");
const worker_module_1 = require("../worker/worker.module");
let AuthModule = class AuthModule {
};
exports.AuthModule = AuthModule;
exports.AuthModule = AuthModule = __decorate([
    (0, common_1.Module)({
        imports: [
            customer_module_1.CustomerModule,
            company_module_1.CompanyModule,
            worker_module_1.WorkerModule,
            jwt_1.JwtModule.register({
                global: true,
                secret: jwt_secret_1.JWT_SECRET,
                signOptions: { expiresIn: '1d' },
            }),
        ],
        controllers: [
            auth_controller_1.AuthController,
            authCompany_controller_1.AuthCompanyController,
            authCustomer_controller_1.AuthCustomerController,
            authWorker_controller_1.AuthWorkerController
        ],
        providers: [auth_service_1.AuthService],
        exports: [auth_service_1.AuthService],
    })
], AuthModule);
//# sourceMappingURL=auth.module.js.map