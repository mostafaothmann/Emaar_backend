import { Repository } from 'typeorm';
import { PStatus } from './entities/p-status.entity';
import { PStatusDto } from './dto/create-pstatus.dto';
import { UpdatePStatusDto } from './dto/update-pstatus.dto';
export declare class PStatusService {
    private readonly pStatusRepository;
    constructor(pStatusRepository: Repository<PStatus>);
    create(dto: PStatusDto): Promise<PStatus>;
    findAll(): Promise<PStatus[]>;
    findOne(id: number): Promise<PStatus | null>;
    update(id: number, dto: UpdatePStatusDto): Promise<PStatus | null>;
    remove(id: number): Promise<void>;
}
