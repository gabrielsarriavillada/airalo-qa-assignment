export interface OrderResponse {
    meta: Meta,
    data: {
        id: number,
        code: string,
        currency: string,
        package_id: string,
        quantity: number,
        type: string,
        description: string,
        esim_type: string,
        validity: number,
        package: string,
        data: string,
        price: number,
        pricing_model: string,
        created_at: string,
        manual_installation: string,
        qrcode_installation: string,
        installation_guides: InstallationGuides,
        text: string | null,
        voice: string | null,
        net_price: number,
        brand_settings_name: string | null,
        sims: Sim[],
    }
}

export interface Meta {
    message: string,
}

export interface InstallationGuides {
    en: string,
}

export interface Sim {
    id: number,
    created_at: string,
    iccid: string,
    lpa: string,
    imsis: string | null,
    matching_id: string,
    qrcode: "LPA:1$lpa.airalo.com$DUMMY-2606040200-FsUih-14211",
    qrcode_url: "https://sandbox.airalo.com/qr?expires=1869056233&id=435795&signature=8dbdd469a35a1ce8424c516a94fa4e6547d3479af8379a908ff837a38180c218",
    airalo_code: string | null,
    apn_type: string,
    apn_value: string,
    is_roaming: boolean,
    confirmation_code: string | null,
    apn: ApnSettings,
    msisdn: string | null,
    direct_apple_installation_url: string,
}

export interface ApnSettings {
    ios: ApnConfiguration,
    android: ApnConfiguration,
}

export interface ApnConfiguration {
    apn_type: string,
    apn_value: string,
}
