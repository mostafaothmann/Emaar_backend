"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateGovernorateDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_governorate_dto_1 = require("./create-governorate.dto");
class UpdateGovernorateDto extends (0, mapped_types_1.PartialType)(create_governorate_dto_1.CreateGovernorateDto) {
}
exports.UpdateGovernorateDto = UpdateGovernorateDto;
//# sourceMappingURL=update-governorate.dto.js.map