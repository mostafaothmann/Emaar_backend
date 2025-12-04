"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Worker = void 0;
const role_enum_1 = require("../../auth/enums/role.enum");
const typeofworker_entity_1 = require("../../typeofworker/entities/typeofworker.entity");
const typeorm_1 = require("typeorm");
let Worker = class Worker {
    id;
    firstName;
    age;
    lastName;
    email;
    password;
    role;
    secondPhone;
    photo;
    phone;
    instaLink;
    facebookLink;
    linkedinLink;
    websiteLink;
    description;
    TypeOfWorkerid;
    typeOfWorker;
};
exports.Worker = Worker;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Worker.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'char', length: 255, nullable: true }),
    __metadata("design:type", String)
], Worker.prototype, "firstName", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', nullable: true }),
    __metadata("design:type", Number)
], Worker.prototype, "age", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], Worker.prototype, "lastName", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true, unique: true }),
    __metadata("design:type", String)
], Worker.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true, unique: true }),
    __metadata("design:type", String)
], Worker.prototype, "password", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "enum",
        enum: role_enum_1.ROLE,
        default: role_enum_1.ROLE.WORKER
    }),
    __metadata("design:type", String)
], Worker.prototype, "role", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', nullable: true }),
    __metadata("design:type", Number)
], Worker.prototype, "secondPhone", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], Worker.prototype, "photo", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', nullable: true, unique: true }),
    __metadata("design:type", Number)
], Worker.prototype, "phone", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], Worker.prototype, "instaLink", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], Worker.prototype, "facebookLink", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], Worker.prototype, "linkedinLink", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], Worker.prototype, "websiteLink", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], Worker.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Number)
], Worker.prototype, "TypeOfWorkerid", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => typeofworker_entity_1.TypeOfWorker, typeOfWorker => typeOfWorker.id, { nullable: true }),
    (0, typeorm_1.JoinColumn)({ name: 'TypeOfWorkerid' }),
    __metadata("design:type", typeofworker_entity_1.TypeOfWorker)
], Worker.prototype, "typeOfWorker", void 0);
exports.Worker = Worker = __decorate([
    (0, typeorm_1.Entity)()
], Worker);
//# sourceMappingURL=worker.entity.js.map