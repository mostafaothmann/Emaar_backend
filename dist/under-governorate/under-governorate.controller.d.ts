import { UnderGovernorateService } from './under-governorate.service';
import { CreateUnderGovernorateDto } from './dto/create-under-governorate.dto';
import { UpdateUnderGovernorateDto } from './dto/update-under-governorate.dto';
export declare class UnderGovernorateController {
    private readonly underGovernorateService;
    constructor(underGovernorateService: UnderGovernorateService);
    create(createUnderGovernorateDto: CreateUnderGovernorateDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateUnderGovernorateDto: UpdateUnderGovernorateDto): string;
    remove(id: string): string;
}
