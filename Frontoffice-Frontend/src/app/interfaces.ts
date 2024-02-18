export type GetterFn = (item: any) => any;

export interface ErrorResponse {
    error: {
        code: number,
        message: string
    }
}

export interface HttpError {
    error: ErrorResponse,
    message: string,
    status: number
}
