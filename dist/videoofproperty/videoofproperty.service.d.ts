import { Repository } from 'typeorm';
import { UpdateVideoOfPropertyDto } from './dto/update-videoofproperty.dto';
import { VideoOfProperty } from './entities/videoofproperty.entity';
import { VideoOfPropertyDto } from './dto/create-videoofproperty.dto';
export declare class VideoOfPropertyService {
    private readonly videoOfPropertyRepository;
    constructor(videoOfPropertyRepository: Repository<VideoOfProperty>);
    create(dto: VideoOfPropertyDto): Promise<VideoOfProperty>;
    findAll(): Promise<VideoOfProperty[]>;
    findOne(id: number): Promise<VideoOfProperty | null>;
    update(id: number, updateDto: UpdateVideoOfPropertyDto): Promise<VideoOfProperty | null>;
    remove(id: number): Promise<void>;
}
