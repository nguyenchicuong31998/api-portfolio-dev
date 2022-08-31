export class AppError extends Error {
    private readonly statusCode: number;
    constructor(statusCode: number, message: string) {
        super(message);
        this.statusCode = statusCode || 500;
    }
}
