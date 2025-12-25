import { Injectable } from '@nestjs/common';
import { v2, UploadApiErrorResponse, UploadApiResponse } from 'cloudinary';

@Injectable()
export class CloudinaryService {
    constructor() {
        v2.config({
            cloud_name: 'dxnjcyb48',
            api_key: '193282762372218',
            api_secret: 'CTHohpIeInXawHnalbqIst0FUSc',
        });
    }
    async uploadImage(
        file: Express.Multer.File,
        folder: string,
    ): Promise<UploadApiResponse | UploadApiErrorResponse> {
        return new Promise((resolve, reject) => {
            console.log(file)
            console.log(folder)
            v2.uploader.upload_stream({ folder: folder }, (error, result) => {
                if (error) return reject(error);
                resolve(result!);
            }).end(file.buffer);
        });
    }
}

