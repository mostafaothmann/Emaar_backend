import { Body, Controller, Post, UploadedFile, UseInterceptors } from "@nestjs/common";
import { CloudinaryService } from "./cloudinary.service";
import { FileInterceptor } from "@nestjs/platform-express";
import multer from "multer";



@Controller('images')
export class ImageController {
    constructor(private cloudinaryService: CloudinaryService) { }
    @Post('upload')
    @UseInterceptors(
        FileInterceptor('image', {
            storage: multer.memoryStorage(),
        }),
    )
    async uploadFile(
        @UploadedFile() file: Express.Multer.File,
        @Body('folderName') folderName: string,
    ) {
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

}