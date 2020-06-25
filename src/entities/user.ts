interface Document {
    readonly type: string;
    readonly number: string;
    readonly expirationTime: string;
}

export default interface User {
    readonly id: string;
    readonly fullName: string;
    readonly document?: Document;
    readonly birthDate?: string;
    readonly createdAt: number;
    readonly updatedAt: number;
}
