import { UserTypes } from "../util/userTypes.enum";

export interface IUSER{
    _id: string;
    name: string;
    email: string;
    password: string;
    type: UserTypes;
    createdAt: Date;
    updatedAt: Date;
}