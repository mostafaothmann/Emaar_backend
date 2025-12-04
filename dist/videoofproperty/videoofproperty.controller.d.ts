import { VideoOfPropertyService } from './videoofproperty.service';
import { VideoOfPropertyDto } from './dto/create-videoofproperty.dto';
import { UpdateVideoOfPropertyDto } from './dto/update-videoofproperty.dto';
export declare class VideoofpropertyController {
    private readonly videoofpropertyService;
    constructor(videoofpropertyService: VideoOfPropertyService);
    create(createVideoofpropertyDto: VideoOfPropertyDto): Promise<import("./entities/videoofproperty.entity").VideoOfProperty>;
    findAll(): Promise<import("./entities/videoofproperty.entity").VideoOfProperty[]>;
    findOne(id: string): Promise<import("./entities/videoofproperty.entity").VideoOfProperty | null>;
    update(id: string, updateVideoofpropertyDto: UpdateVideoOfPropertyDto): Promise<import("./entities/videoofproperty.entity").VideoOfProperty | null>;
    remove(id: string): Promise<void>;
}
