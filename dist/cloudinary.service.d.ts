import { UploadApiErrorResponse, UploadApiResponse } from 'cloudinary';
export declare class CloudinaryService {
    constructor();
    uploadImage(file: Express.Multer.File, folder: string): Promise<UploadApiResponse | UploadApiErrorResponse>;
}
