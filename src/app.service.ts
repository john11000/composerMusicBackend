import { Injectable } from "@nestjs/common";
@Injectable()
export class AppService {
  getHello(): string {
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

  async login(username: string, password: string) {
    if (username === "1234" && password === "1234") {
      return {
        status: 200,
        message: "login success",
      };
    } else {
      return {
        status: 401,
        message: "login failed",
      };
    }
  }
}
