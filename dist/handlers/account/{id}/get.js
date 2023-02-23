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
Object.defineProperty(exports, "__esModule", { value: true });
const Users_1 = require("../../../ts-models/Users");
const UserDetails_1 = require("../../../ts-models/UserDetails");
const handler = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield Users_1.Users.findByPk(req.params.userId);
    if (user === null) {
        res.status(404);
    }
    else {
        const userDetails = yield UserDetails_1.UserDetails.scope('current').findAll({ where: { userId: user.id } });
        if (userDetails === null || userDetails.length !== 1) {
            res.status(500);
        }
        else {
            res.status(200).json(Object.assign(Object.assign({}, user), { details: Object.assign({}, userDetails[0]) }));
        }
    }
});
exports.default = handler;
