import { PartialType } from '@nestjs/mapped-types';
import { CreateCustomerPropertyOfferDto } from './create-customer-property-offer.dto';

export class UpdateCustomerPropertyOfferDto extends PartialType(CreateCustomerPropertyOfferDto) {}
