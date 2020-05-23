export interface User {
    fullName: string;
    documentNumber: string;
}

export interface UserRequest {
    fullName: string;
    documentNumber: string;
    motherName?: string;
    birthDate?: string;
}
