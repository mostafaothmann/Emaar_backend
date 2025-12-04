import { Repository } from 'typeorm';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { Customer } from './entities/customer.entity';
import { CustomerDto } from './dto/create-customer.dto';
export declare class CustomerService {
    private readonly customerRepository;
    constructor(customerRepository: Repository<Customer>);
    create(customerDto: CustomerDto): Promise<Customer>;
    findAll(): Promise<Customer[]>;
    findOne(id: number): Promise<Customer | null>;
    findByEmail(email: string): Promise<Customer | null>;
    update(id: number, updateCustomerDto: UpdateCustomerDto): Promise<Customer | null>;
    remove(id: number): Promise<void>;
}
