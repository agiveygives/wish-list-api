"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserDetails = void 0;
const sequelize_1 = require("sequelize");
const sequelize_typescript_1 = require("sequelize-typescript");
let UserDetails = class UserDetails extends sequelize_typescript_1.Model {
};
__decorate([
    (0, sequelize_typescript_1.Scopes)({
        current: {
            where: {
                invalidAt: null,
                validAt: {
                    [sequelize_1.Op.lt]: Date.now()
                }
            },
        },
    }),
    (0, sequelize_typescript_1.Column)({
        primaryKey: true,
        type: sequelize_typescript_1.DataType.UUID
    })
], UserDetails.prototype, "id", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        allowNull: true,
        type: sequelize_typescript_1.DataType.UUID
    })
], UserDetails.prototype, "userId", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        allowNull: true,
        type: sequelize_typescript_1.DataType.STRING
    })
], UserDetails.prototype, "firstName", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        allowNull: true,
        type: sequelize_typescript_1.DataType.STRING
    })
], UserDetails.prototype, "lastName", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        allowNull: true,
        type: sequelize_typescript_1.DataType.DATE
    })
], UserDetails.prototype, "dateOfBirth", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        allowNull: true,
        type: sequelize_typescript_1.DataType.STRING
    })
], UserDetails.prototype, "username", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        allowNull: true,
        type: sequelize_typescript_1.DataType.STRING
    })
], UserDetails.prototype, "email", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        allowNull: true,
        type: sequelize_typescript_1.DataType.DATE,
        defaultValue: sequelize_typescript_1.Sequelize.literal("'2023-02-13 05:55:07.298+00'::timestamp with time zone")
    })
], UserDetails.prototype, "validAt", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        allowNull: true,
        type: sequelize_typescript_1.DataType.DATE
    })
], UserDetails.prototype, "invalidAt", void 0);
UserDetails = __decorate([
    (0, sequelize_typescript_1.Table)({
        tableName: "UserDetails",
        schema: "public",
        timestamps: false
    })
], UserDetails);
exports.UserDetails = UserDetails;
