import { UserTypes } from "../../interface/util/userTypes.enum";

export const createUserSchema = {
    type: "object",
    properties: {
        name:{type:'string',minLength:2,maxLength:45},
        email:{type:'string',format:'email'},
        password:{type:'string',minLength:6,maxLength:100},
        type:{type:'string',enum: Object.values(UserTypes)}
    },
    required: ['name', 'email', 'password', 'type'],
    additionalProperties: false,
}

export interface CreateUserDto {
    name: string;
    email: string;
    password: string;
    type: UserTypes;
}