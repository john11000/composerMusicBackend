"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppService = void 0;
const common_1 = require("@nestjs/common");
let AppService = class AppService {
    getHello() {
        return JSON.stringify({
            message: "Backend nestjs version 0.0.1",
            osVersion: "Linux 6.4",
            nodejsVersion: "v20.5.1",
            yarnVersion: "1.22.19",
            nestCLIVersion: "9.4.0",
            nestPlatformInformation: {
                "platform-express version": "9.4.0",
                "platform-fastify version": "9.4.0",
                "schematics version": "9.1.0",
                "mongoose version": "9.2.2",
                "passport version": "9.0.3",
                "swagger version": "6.3.0",
                "common version": "9.4.0",
                "config version": "2.3.1",
                "core version": "9.4.0",
                "jwt version": "10.0.3",
                "cli version": "9.4.0",
            },
        });
    }
    async login(username, password) {
        if (username === "1234" && password === "1234") {
            return {
                status: 200,
                message: "login success",
            };
        }
        else {
            return {
                status: 401,
                message: "login failed",
            };
        }
    }
};
AppService = __decorate([
    (0, common_1.Injectable)()
], AppService);
exports.AppService = AppService;
//# sourceMappingURL=app.service.js.map