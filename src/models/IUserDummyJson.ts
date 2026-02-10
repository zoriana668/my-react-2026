// User

export interface UsersResponseDummyJson {
    users: IUserDummyJson[];
    total: number;
    skip: number;
    limit: number;
}

export interface IUserDummyJson {
    id: number;
    firstName: string;
    lastName: string;
    maidenName: string;
    age: number;
    gender: string; // можна зробити union: 'male' | 'female'
    email: string;
    phone: string;
    username: string;
    password: string;
    birthDate: string; // ISO string
    image: string;
    bloodGroup: string;
    height: number;
    weight: number;
    eyeColor: string;
    hair: IHair;
    ip: string;
    address: IAddress;
    macAddress: string;
    university: string;
    bank: IBank;
    company: ICompany;
    ein: string;
    ssn: string;
    userAgent: string;
    crypto: ICrypto;
    role: string; // можна зробити union: 'admin' | 'user' | ...
}

// Coordinates
export interface ICoordinates {
    lat: number;
    lng: number;
}

// Hair
export interface IHair {
    color: string;
    type: string;
}

// Address (з координатами)
export interface IAddress {
    address: string;
    city: string;
    state: string;
    stateCode: string;
    postalCode: string;
    coordinates: ICoordinates;
    country: string;
}

// Bank
export interface IBank {
    cardExpire: string;
    cardNumber: string;
    cardType: string;
    currency: string;
    iban: string;
}

// Company
export interface ICompany {
    department: string;
    name: string;
    title: string;
    address: IAddress;
}

// Crypto
export interface ICrypto {
    coin: string;
    wallet: string;
    network: string;
}
