"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const config_1 = __importDefault(require("config"));
const cors_1 = __importDefault(require("cors"));
const logger_1 = __importDefault(require("./utils/logger"));
const routes_1 = __importDefault(require("./routes"));
const app = (0, express_1.default)();
const port = config_1.default.get('port');
const origin = config_1.default.get('origin');
app.use((0, cors_1.default)({
    origin,
    credentials: true
}));
app.use(express_1.default.json());
app.use(express_1.default.static('views'));
app.listen(port, () => {
    logger_1.default.info(`The server has started listening on port ${port}`);
    (0, routes_1.default)(app);
});
