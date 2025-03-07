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
exports.CreatePayableAssignorBody = void 0;
const class_validator_1 = require("class-validator");
class CreatePayableAssignorBody {
}
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'The field document should not be empty.' }),
    (0, class_validator_1.Length)(14, 30),
    __metadata("design:type", String)
], CreatePayableAssignorBody.prototype, "document", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'The field email should not be empty.' }),
    (0, class_validator_1.Length)(5, 140),
    __metadata("design:type", String)
], CreatePayableAssignorBody.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'The field phone should not be empty.' }),
    (0, class_validator_1.Length)(20, 20),
    __metadata("design:type", String)
], CreatePayableAssignorBody.prototype, "phone", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'The field name should not be empty.' }),
    (0, class_validator_1.Length)(10, 140),
    __metadata("design:type", String)
], CreatePayableAssignorBody.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({
        message: 'The field value should not be empty.'
    }),
    __metadata("design:type", Number)
], CreatePayableAssignorBody.prototype, "value", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({
        message: 'The field emissionDate should not be empty.'
    }),
    __metadata("design:type", Date)
], CreatePayableAssignorBody.prototype, "emissionDate", void 0);
exports.CreatePayableAssignorBody = CreatePayableAssignorBody;
//# sourceMappingURL=create-payable-assignor-body.js.map