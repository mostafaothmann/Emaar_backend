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
exports.TypeofworkerController = void 0;
const common_1 = require("@nestjs/common");
const create_typeofworker_dto_1 = require("./dto/create-typeofworker.dto");
const typeofworker_service_1 = require("./typeofworker.service");
const update_typeofworker_dto_1 = require("./dto/update-typeofworker.dto");
let TypeofworkerController = class TypeofworkerController {
    typeofworkerService;
    constructor(typeofworkerService) {
        this.typeofworkerService = typeofworkerService;
    }
    create(typeOfWorkerDto) {
        return this.typeofworkerService.create(typeOfWorkerDto);
    }
    findAll() {
        return this.typeofworkerService.findAll();
    }
    findOne(id) {
        return this.typeofworkerService.findOne(+id);
    }
    update(id, updateTypeofworkerDto) {
        return this.typeofworkerService.update(+id, updateTypeofworkerDto);
    }
    remove(id) {
        return this.typeofworkerService.remove(+id);
    }
};
exports.TypeofworkerController = TypeofworkerController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_typeofworker_dto_1.TypeOfWorkerDto]),
    __metadata("design:returntype", void 0)
], TypeofworkerController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TypeofworkerController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TypeofworkerController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_typeofworker_dto_1.UpdateTypeOfWorkerDto]),
    __metadata("design:returntype", void 0)
], TypeofworkerController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TypeofworkerController.prototype, "remove", null);
exports.TypeofworkerController = TypeofworkerController = __decorate([
    (0, common_1.Controller)('typeofworker'),
    __metadata("design:paramtypes", [typeofworker_service_1.TypeOfWorkerService])
], TypeofworkerController);
//# sourceMappingURL=typeofworker.controller.js.map