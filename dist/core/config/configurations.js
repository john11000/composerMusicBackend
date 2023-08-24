"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.configRoot = void 0;
const config_1 = require("@nestjs/config");
const Joi = require("joi");
const configurations = (0, config_1.registerAs)('configEnvs', () => ({
    jwtSecret: process.env.JWT_SECRET || '',
    jwtExpiresIn: process.env.TOKEN_EXPIRATION || '',
    frontUrl: process.env.FRONT_URL || '',
    backendUrl: process.env.BACKEND_URL || '',
    mongoInitdbRootUsername: process.env.MONGO_INITDB_ROOT_USERNAME || '',
    mongoInitdbRootPassword: process.env.MONGO_INITDB_ROOT_PASSWORD || '',
    mongoInitdbDatabase: process.env.MONGO_INITDB_DATABASE || '',
    mongoHost: process.env.MONGO_HOST || '',
    mongoPort: parseInt(process.env.MONGO_PORT || '', 10),
}));
exports.default = configurations;
function configRoot() {
    return {
        load: [configurations],
        isGlobal: true,
        validationSchema: Joi.object({
            JWT_SECRET: Joi.string().required(),
            TOKEN_EXPIRATION: Joi.string().required(),
            FRONT_URL: Joi.string().required(),
            BACKEND_URL: Joi.string().required(),
            MONGO_INITDB_ROOT_USERNAME: Joi.string().required(),
            MONGO_INITDB_ROOT_PASSWORD: Joi.string().required(),
            MONGO_INITDB_DATABASE: Joi.string().required(),
            MONGO_HOST: Joi.string().required(),
            MONGO_PORT: Joi.number().required(),
        }),
    };
}
exports.configRoot = configRoot;
//# sourceMappingURL=configurations.js.map