export interface TokenResponse {
    meta: Meta;
    data: TokenData;
}

export interface Meta {
    message: string;
}

export interface TokenData {
    token_type: string;
    expires_in: number;
    access_token: string;
}
