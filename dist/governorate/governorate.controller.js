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
exports.GovernorateController = void 0;
const common_1 = require("@nestjs/common");
const governorate_service_1 = require("./governorate.service");
const create_governorate_dto_1 = require("./dto/create-governorate.dto");
const update_governorate_dto_1 = require("./dto/update-governorate.dto");
let GovernorateController = class GovernorateController {
    governorateService;
    constructor(governorateService) {
        this.governorateService = governorateService;
    }
    create(createGovernorateDto) {
        return this.governorateService.create(createGovernorateDto);
    }
    findAll() {
        return this.governorateService.findAll();
    }
    findOne(id) {
        return this.governorateService.findOne(+id);
    }
    update(id, updateGovernorateDto) {
        return this.governorateService.update(+id, updateGovernorateDto);
    }
    remove(id) {
        return this.governorateService.remove(+id);
    }
};
exports.GovernorateController = GovernorateController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_governorate_dto_1.CreateGovernorateDto]),
    __metadata("design:returntype", void 0)
], GovernorateController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], GovernorateController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], GovernorateController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_governorate_dto_1.UpdateGovernorateDto]),
    __metadata("design:returntype", void 0)
], GovernorateController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], GovernorateController.prototype, "remove", null);
exports.GovernorateController = GovernorateController = __decorate([
    (0, common_1.Controller)('governorate'),
    __metadata("design:paramtypes", [governorate_service_1.GovernorateService])
], GovernorateController);
//# sourceMappingURL=governorate.controller.js.map