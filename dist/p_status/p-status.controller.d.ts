import { PStatusDto } from './dto/create-pstatus.dto';
import { UpdatePStatusDto } from './dto/update-pstatus.dto';
import { PStatusService } from './p-status.service';
export declare class PStatusController {
    private readonly pStatusService;
    constructor(pStatusService: PStatusService);
    create(dto: PStatusDto): Promise<import("./entities/p-status.entity").PStatus>;
    findAll(): Promise<import("./entities/p-status.entity").PStatus[]>;
    findOne(id: string): Promise<import("./entities/p-status.entity").PStatus | null>;
    update(id: string, dto: UpdatePStatusDto): Promise<import("./entities/p-status.entity").PStatus | null>;
    remove(id: string): Promise<void>;
}
