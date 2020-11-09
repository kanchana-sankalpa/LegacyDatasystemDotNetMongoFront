import { Role } from "./role";

export class User {
    id: number;
    userId: number;
    username: string;
    password: string;
    firstName: string;
    fullName: string;
    lastName: string;
    role: Role;
    token?: string;
}