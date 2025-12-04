import { Repository } from 'typeorm';
import { TypeOfOwnering } from './entities/typeofownering.entity';
import { TypeOfOwneringDto } from './dto/create-typeofownering.dto';
import { UpdateTypeOfOwneringDto } from './dto/update-typeofownering.dto';
export declare class TypeOfOwneringService {
    private readonly typeOfOwneringRepository;
    constructor(typeOfOwneringRepository: Repository<TypeOfOwnering>);
    create(dto: TypeOfOwneringDto): Promise<TypeOfOwnering>;
    findAll(): Promise<TypeOfOwnering[]>;
    findOne(id: number): Promise<TypeOfOwnering | null>;
    update(id: number, updateDto: UpdateTypeOfOwneringDto): Promise<TypeOfOwnering | null>;
    remove(id: number): Promise<void>;
}
