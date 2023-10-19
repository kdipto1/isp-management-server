"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const config_1 = __importDefault(require("./config"));
const globalErrorHandler_1 = __importDefault(require("./app/middlewares/globalErrorHandler"));
async function bootstrap() {
    const server = app_1.default.listen(config_1.default.port, () => {
        app_1.default.use(globalErrorHandler_1.default);
        console.info(`Server running on port ${config_1.default.port}`);
    });
    const exitHandler = () => {
        if (server) {
            server.close(() => {
                console.info('Server closed');
            });
        }
        process.exit(1);
    };
    const unexpectedErrorHandler = (err) => {
        console.error(err);
        exitHandler();
    };
    process.on('uncaughtException', unexpectedErrorHandler);
    process.on('unhandledRejection', unexpectedErrorHandler);
    process.on('SIGTERM', () => {
        console.info('SIGTERM received');
        if (server) {
            server.close();
        }
    });
}
bootstrap();
