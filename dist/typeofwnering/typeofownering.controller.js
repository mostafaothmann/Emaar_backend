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
exports.TypeofwneringController = void 0;
const common_1 = require("@nestjs/common");
const typeofownering_service_1 = require("./typeofownering.service");
const create_typeofownering_dto_1 = require("./dto/create-typeofownering.dto");
const update_typeofownering_dto_1 = require("./dto/update-typeofownering.dto");
let TypeofwneringController = class TypeofwneringController {
    typeofowneringService;
    constructor(typeofowneringService) {
        this.typeofowneringService = typeofowneringService;
    }
    create(createTypeofwneringDto) {
        return this.typeofowneringService.create(createTypeofwneringDto);
    }
    findAll() {
        return this.typeofowneringService.findAll();
    }
    findOne(id) {
        return this.typeofowneringService.findOne(+id);
    }
    update(id, updateTypeofwneringDto) {
        return this.typeofowneringService.update(+id, updateTypeofwneringDto);
    }
    remove(id) {
        return this.typeofowneringService.remove(+id);
    }
};
exports.TypeofwneringController = TypeofwneringController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_typeofownering_dto_1.TypeOfOwneringDto]),
    __metadata("design:returntype", void 0)
], TypeofwneringController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TypeofwneringController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TypeofwneringController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_typeofownering_dto_1.UpdateTypeOfOwneringDto]),
    __metadata("design:returntype", void 0)
], TypeofwneringController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TypeofwneringController.prototype, "remove", null);
exports.TypeofwneringController = TypeofwneringController = __decorate([
    (0, common_1.Controller)('typeofownering'),
    __metadata("design:paramtypes", [typeofownering_service_1.TypeOfOwneringService])
], TypeofwneringController);
//# sourceMappingURL=typeofownering.controller.js.map