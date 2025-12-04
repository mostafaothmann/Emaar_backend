import { CreateUnderGovernorateDto } from './dto/create-under-governorate.dto';
import { UpdateUnderGovernorateDto } from './dto/update-under-governorate.dto';
export declare class UnderGovernorateService {
    create(createUnderGovernorateDto: CreateUnderGovernorateDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateUnderGovernorateDto: UpdateUnderGovernorateDto): string;
    remove(id: number): string;
}
