export interface TokenResponse {
    meta: Meta,
    data: {
        token_type: string;
        expires_in: number;
        access_token: string;
    }
}

export interface Meta {
    message: string,
}
