import { CreateGovernorateDto } from './dto/create-governorate.dto';
import { UpdateGovernorateDto } from './dto/update-governorate.dto';
export declare class GovernorateService {
    create(createGovernorateDto: CreateGovernorateDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateGovernorateDto: UpdateGovernorateDto): string;
    remove(id: number): string;
}
