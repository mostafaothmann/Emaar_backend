import { Test, TestingModule } from '@nestjs/testing';
import { TypeofcompanyController } from './typeofcompany.controller';
import { TypeOfCompanyService } from './typeofcompany.service';

describe('TypeofcompanyController', () => {
  let controller: TypeofcompanyController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TypeofcompanyController],
      providers: [TypeOfCompanyService],
    }).compile();

    controller = module.get<TypeofcompanyController>(TypeofcompanyController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
