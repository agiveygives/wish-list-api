"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../../database"));
const joi_1 = __importDefault(require("joi"));
const Users_1 = require("../../ts-models/Users");
const ts_models_1 = require("ts-models");
const thirteenYearsOld = new Date();
thirteenYearsOld.setFullYear(thirteenYearsOld.getFullYear() - 13);
const schema = joi_1.default.object({
    username: joi_1.default.string()
        .pattern(/^[a-zA-Z0-9]+[a-zA-Z0-9\-\_\.]*[a-zA-Z0-9]+$/i)
        .min(3)
        .max(50)
        .required(),
    email: joi_1.default.string()
        .email()
        .required(),
    dateOfBirth: joi_1.default.string()
        .isoDate()
        .max(thirteenYearsOld.valueOf()),
});
const handler = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { value, error } = schema.validate(req.body);
    if (error) {
        res.status(400).json({ error: error.message });
    }
    try {
        const result = yield database_1.default.transaction((t) => __awaiter(void 0, void 0, void 0, function* () {
            const user = yield Users_1.Users.create({}, { transaction: t });
            const userDetails = yield ts_models_1.UserDetails.create({
                userId: user.id,
                username: value.username,
                email: value.email,
                dateOfBirth: value.dateOfBirth,
            }, { transaction: t });
            return { user, userDetails };
        }));
        res.status(201).json({
            id: result.user.id,
            username: result.userDetails.username,
            email: result.userDetails.email,
            dateOfBirth: result.userDetails.dateOfBirth
        });
    }
    catch (error) {
        console.error(error);
        res.status(500);
    }
});
exports.default = handler;
