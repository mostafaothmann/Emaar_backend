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
exports.UnderGovernorateController = void 0;
const common_1 = require("@nestjs/common");
const under_governorate_service_1 = require("./under-governorate.service");
const create_under_governorate_dto_1 = require("./dto/create-under-governorate.dto");
const update_under_governorate_dto_1 = require("./dto/update-under-governorate.dto");
let UnderGovernorateController = class UnderGovernorateController {
    underGovernorateService;
    constructor(underGovernorateService) {
        this.underGovernorateService = underGovernorateService;
    }
    create(createUnderGovernorateDto) {
        return this.underGovernorateService.create(createUnderGovernorateDto);
    }
    findAll() {
        return this.underGovernorateService.findAll();
    }
    findOne(id) {
        return this.underGovernorateService.findOne(+id);
    }
    update(id, updateUnderGovernorateDto) {
        return this.underGovernorateService.update(+id, updateUnderGovernorateDto);
    }
    remove(id) {
        return this.underGovernorateService.remove(+id);
    }
};
exports.UnderGovernorateController = UnderGovernorateController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_under_governorate_dto_1.CreateUnderGovernorateDto]),
    __metadata("design:returntype", void 0)
], UnderGovernorateController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UnderGovernorateController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], UnderGovernorateController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_under_governorate_dto_1.UpdateUnderGovernorateDto]),
    __metadata("design:returntype", void 0)
], UnderGovernorateController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], UnderGovernorateController.prototype, "remove", null);
exports.UnderGovernorateController = UnderGovernorateController = __decorate([
    (0, common_1.Controller)('under-governorate'),
    __metadata("design:paramtypes", [under_governorate_service_1.UnderGovernorateService])
], UnderGovernorateController);
//# sourceMappingURL=under-governorate.controller.js.map