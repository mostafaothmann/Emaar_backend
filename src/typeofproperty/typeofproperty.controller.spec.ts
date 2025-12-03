import { Test, TestingModule } from '@nestjs/testing';
import { TypeofpropertyController } from './typeofproperty.controller';
import { TypeOfPropertyService } from './typeofproperty.service';


describe('TypeofpropertyController', () => {
  let controller: TypeofpropertyController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TypeofpropertyController],
      providers: [TypeOfPropertyService],
    }).compile();

    controller = module.get<TypeofpropertyController>(TypeofpropertyController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
