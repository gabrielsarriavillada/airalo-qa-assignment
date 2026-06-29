import { ApnSettings, Meta } from "./order-response.model"

export interface ESimResponse {
    data: ESim;
    meta: Meta;
}

export interface ESim {
    id: number; 
    created_at: string; 
    iccid: string; 
    lpa: string; 
    imsis: string | null; 
    matching_id: string; 
    qrcode: string; 
    qrcode_url: string; 
    direct_apple_installation_url: string; 
    voucher_code: string | null; 
    airalo_code: string | null; 
    apn_type: string; 
    apn_value: string; 
    is_roaming: boolean;
    confirmation_code: string | null; 
    brand_settings_name: string | null; 
    msisdn: string | null; 
    apn: ApnSettings;
    sharing: Sharing;
    recycled: boolean;
    recycled_at: string | null; 
}

export interface Sharing {
    link: string; 
    access_code: string; 
}
