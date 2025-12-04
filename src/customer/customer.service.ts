import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { UpdateCustomerDto } from './dto/update-customer.dto';
import { Customer } from './entities/customer.entity';
import { CustomerDto } from './dto/create-customer.dto';

@Injectable()
export class CustomerService {
  constructor(
    @InjectRepository(Customer)
    private readonly customerRepository: Repository<Customer>,
  ) {}

  create(customerDto: CustomerDto): Promise<Customer> {
    const customer = this.customerRepository.create(customerDto);
    return this.customerRepository.save(customer);
  }

  findAll(): Promise<Customer[]> {
    return this.customerRepository.find();
  }

  findOne(id: number): Promise<Customer | null> {
        return this.customerRepository.findOne({
    where: { id },
    relations: ['properties'], // 👈 this loads the related properties
  });
    }


  findByEmail(email: string): Promise<Customer | null> {
    return this.customerRepository.findOneBy({ email });
  }

  async update(id: number, updateCustomerDto: UpdateCustomerDto): Promise<Customer | null> {
    await this.customerRepository.update(id, updateCustomerDto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.customerRepository.delete(id);
  }

  
}
