import { Test, TestingModule } from '@nestjs/testing';
import { PStatusController } from './p-status.controller';
import { PStatusService } from './p-status.service';

describe('PStatusController', () => {
  let controller: PStatusController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PStatusController],
      providers: [PStatusService],
    }).compile();

    controller = module.get<PStatusController>(PStatusController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
