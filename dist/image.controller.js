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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImageController = void 0;
const common_1 = require("@nestjs/common");
const cloudinary_service_1 = require("./cloudinary.service");
const platform_express_1 = require("@nestjs/platform-express");
const multer_1 = __importDefault(require("multer"));
let ImageController = class ImageController {
    cloudinaryService;
    constructor(cloudinaryService) {
        this.cloudinaryService = cloudinaryService;
    }
    async uploadFile(file, folderName) {
        console.log({
            hasFile: !!file,
            bufferExists: !!file?.buffer,
            bufferLength: file?.buffer?.length,
        });
        if (!file || !file.buffer || file.buffer.length === 0) {
            throw new Error('No file or empty file received');
        }
        const result = await this.cloudinaryService.uploadImage(file, folderName);
        return result.secure_url;
    }
};
exports.ImageController = ImageController;
__decorate([
    (0, common_1.Post)('upload'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('image', {
        storage: multer_1.default.memoryStorage(),
    })),
    __param(0, (0, common_1.UploadedFile)()),
    __param(1, (0, common_1.Body)('folderName')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], ImageController.prototype, "uploadFile", null);
exports.ImageController = ImageController = __decorate([
    (0, common_1.Controller)('images'),
    __metadata("design:paramtypes", [cloudinary_service_1.CloudinaryService])
], ImageController);
//# sourceMappingURL=image.controller.js.map