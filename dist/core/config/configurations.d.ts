import { ConfigModuleOptions } from '@nestjs/config';
export interface IConfig {
    jwtSecret: string;
    jwtExpiresIn: string;
    frontUrl: string;
    backendUrl: string;
    mongoInitdbRootUsername: string;
    mongoInitdbRootPassword: string;
    mongoInitdbDatabase: string;
    mongoHost: string;
    mongoPort: number;
}
declare const configurations: (() => IConfig) & import("@nestjs/config").ConfigFactoryKeyHost<IConfig>;
export default configurations;
export declare function configRoot(): ConfigModuleOptions;
