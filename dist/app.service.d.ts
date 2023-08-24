export declare class AppService {
    getHello(): string;
    login(username: string, password: string): Promise<{
        status: number;
        message: string;
    }>;
}
