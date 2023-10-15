'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const config_1 = __importDefault(require('./config'));
const app_1 = __importDefault(require('./app'));
async function bootstrap() {
  const server = app_1.default.listen(config_1.default.port, () => {
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
  const unexpectedErrorHandler = error => {
    console.error(error);
    exitHandler();
  };
  process.on('uncaughtException', unexpectedErrorHandler);
  process.on('unhandledRejection', unexpectedErrorHandler);
  // process.on('SIGTERM', () => {
  //   logger.info('SIGTERM received');
  //   if (server) {
  //     server.close();
  //   }
  // });
}
bootstrap();
