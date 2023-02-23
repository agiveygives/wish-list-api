"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const post_1 = __importDefault(require("../handlers/account/post"));
const get_1 = __importDefault(require("../handlers/account/{id}/get"));
const router = express_1.default.Router();
router.post('/', post_1.default);
router.post('/:userId', get_1.default);
exports.default = router;
