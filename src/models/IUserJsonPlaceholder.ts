// User
export interface IUser {
    id: number;
    name: string;
    username: string;
    email: string;
    address: IAddress;
    phone: string;
    website: string;
    company: ICompany;
}

// Geo coordinates
export interface IGeo {
    lat: string;
    lng: string;
}

// Address
export interface IAddress {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: IGeo;
}

// Company
export interface ICompany {
    name: string;
    catchPhrase: string;
    bs: string;
}

