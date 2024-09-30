export interface APIError {
    msg: string;
    code: number;
}

export const isAPIError = (e: any): e is APIError =>
    (e as APIError).msg !== undefined && (e as APIError).code !== undefined;
