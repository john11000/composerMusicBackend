"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const platform_fastify_1 = require("@nestjs/platform-fastify");
const swagger_1 = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const multipart_1 = require("@fastify/multipart");
const helmet_1 = require("helmet");
const interfaces_1 = require("./core/interfaces");
const app_module_1 = require("./app.module");
async function bootstrap() {
    const fastifyAdapter = new platform_fastify_1.FastifyAdapter({
        logger: false,
    });
    fastifyAdapter.register(multipart_1.default, {
        limits: {
            fieldNameSize: 1000,
            fieldSize: 100,
            fields: 10,
            fileSize: 20971520,
            files: 1,
            headerPairs: 200,
        },
    });
    const app = await core_1.NestFactory.create(app_module_1.AppModule, fastifyAdapter);
    app.use((0, helmet_1.default)({
        contentSecurityPolicy: process.env.NODE_ENV === interfaces_1.Environments.PRODUCTION ? true : false,
    }));
    const config = new swagger_1.DocumentBuilder()
        .setTitle("Proyecto base")
        .setDescription("Proyecto base API description")
        .setVersion("1.0")
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup("api", app, document);
    app.useGlobalPipes(new common_1.ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }));
    app.enableCors();
    await app.listen(3005, "0.0.0.0");
    console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();
//# sourceMappingURL=main.js.map