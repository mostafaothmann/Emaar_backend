import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CustomerCompany } from './entities/customer_company.entity';
import { Customer } from 'src/customer/entities/customer.entity';
import { Company } from 'src/company/entities/company.entity';

@Injectable()
export class CustomerCompanyService {
  constructor(
    @InjectRepository(CustomerCompany)
    private readonly customerCompanyRepo: Repository<CustomerCompany>,

    @InjectRepository(Customer)
    private readonly customerRepo: Repository<Customer>,

    @InjectRepository(Company)
    private readonly companyRepo: Repository<Company>,
  ) {}

  async linkCustomerToCompany(
    customerId: number,
    companyId: number,
    startingDate?: Date,
  ) {
    const customer = await this.customerRepo.findOne({ where: { id: customerId } });
    const company = await this.companyRepo.findOne({ where: { id: companyId } });

    if (!customer) throw new NotFoundException(`Customer ${customerId} not found`);
    if (!company) throw new NotFoundException(`Company ${companyId} not found`);

    const relation = this.customerCompanyRepo.create({
      Customerid: customerId,
      Companyid: companyId,
      customer,
      company,
      startingDate,
    });

    return this.customerCompanyRepo.save(relation);
  }

  async findAll() {
    return this.customerCompanyRepo.find({
      relations: ['customer', 'company'],
    });
  }

  async findByCustomer(customerId: number) {
    return this.customerCompanyRepo.find({
      where: { Customerid: customerId },
      relations: ['company'],
    });
  }

  async findByCompany(companyId: number) {
    return this.customerCompanyRepo.find({
      where: { Companyid: companyId },
      relations: ['customer'],
    });
  }

async unlinkCustomerFromCompany(customerId: number, companyId: number) {
  await this.customerCompanyRepo.delete({ Customerid: customerId, Companyid: companyId });
  return { message: `Unlinked customer ${customerId} from company ${companyId}` };
}
async updateStartingDate(
customerId: number,
companyId: number,
startingDate: Date,
) {
const relation = await this.customerCompanyRepo.findOne({
  where: { Customerid: customerId, Companyid: companyId },
});

if (!relation) {
  throw new NotFoundException(
    `Relation between customer ${customerId} and company ${companyId} not found`,
  );
}

relation.startingDate = startingDate;
return this.customerCompanyRepo.save(relation);
}

}
