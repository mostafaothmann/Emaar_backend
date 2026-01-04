import { CloudinaryService } from "./cloudinary.service";
export declare class ImageController {
    private cloudinaryService;
    constructor(cloudinaryService: CloudinaryService);
    uploadFile(file: Express.Multer.File, folderName: string): Promise<any>;
}
