export type Phone = {
    id: number;
    number: string;
    carrier_id: number;
    cpf: string;
    description: string;
}

export type InsertPhone = Omit<Phone, "id">

export type Recharge = {
    id:number;
    phone_id:number;
    value:number;
}

export type Client = {
    cpf:string;
    name:string;
}

export type Carrier = {
    id:number;
    name:string;
    code: number;
}

export type PhoneRecharges = Omit<Phone, "carrier_code"> & {
    carrier: Carrier;
    recharges: Recharge[];
}

export type Summary = {
    cpf: string;
    phones: PhoneRecharges[];
}