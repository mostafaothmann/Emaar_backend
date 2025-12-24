import { Body, Controller, Post, UploadedFile, UseInterceptors } from "@nestjs/common";
import { CloudinaryService } from "./cloudinary.service";
import { FileInterceptor } from "@nestjs/platform-express";



@Controller('images')
export class ImageController {
    constructor(private cloudinaryService: CloudinaryService) { }
    @Post('upload')
    @UseInterceptors(FileInterceptor('image'))
    async uploadFile(@UploadedFile() file: Express.Multer.File, @Body('folderName') folderName: string
    ) {
        try {
            const result = await this.cloudinaryService.uploadImage(file, folderName);
            return result.url;
        } catch (error) {
            console.log('Error Uploading Image', error);
            throw new Error('Failed to upload image');
        }
    }
}