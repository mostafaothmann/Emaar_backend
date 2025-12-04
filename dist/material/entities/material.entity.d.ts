import { Company } from 'src/company/entities/company.entity';
import { TypeOfMaterial } from 'src/typeofmaterial/entities/typeofmaterial.entity';
export declare class Material {
    id: number;
    description: string;
    price_for_one: number;
    isActive: number;
    companyPhone: number;
    companyWhatsapp: number;
    Companyid: number;
    TypeOfMaterialid: number;
    company: Company;
    typeOfMaterial: TypeOfMaterial;
}
