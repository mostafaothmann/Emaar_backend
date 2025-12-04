import { GovernorateService } from './governorate.service';
import { CreateGovernorateDto } from './dto/create-governorate.dto';
import { UpdateGovernorateDto } from './dto/update-governorate.dto';
export declare class GovernorateController {
    private readonly governorateService;
    constructor(governorateService: GovernorateService);
    create(createGovernorateDto: CreateGovernorateDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateGovernorateDto: UpdateGovernorateDto): string;
    remove(id: string): string;
}
