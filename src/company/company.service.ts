import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Company } from './entities/company.entity';
import { CompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';

@Injectable()
export class CompanyService {
  constructor(
    @InjectRepository(Company)
    private readonly companyRepository: Repository<Company>,
  ) {}

  create(companyDto: CompanyDto): Promise<Company> {
    const company = this.companyRepository.create(companyDto);
    return this.companyRepository.save(company);
  }

  findAll(): Promise<Company[]> {
    return this.companyRepository.find();
  }

  findOne(id: number): Promise<Company | null> {
    return this.companyRepository.findOneBy({ id });
  }
  
  findByEmail(email: string): Promise<Company | null> {
    return this.companyRepository.findOneBy({ email });
  }

  async update(id: number, updateCompanyDto: UpdateCompanyDto): Promise<Company | null> {
    await this.companyRepository.update(id, updateCompanyDto);
    return  this.companyRepository.findOneBy({ id });
  }

  async remove(id: number): Promise<void> {
    await this.companyRepository.delete(id);
  }
}
