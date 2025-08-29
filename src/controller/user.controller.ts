import { Request , Response } from "express";
import { errorResponse, successResponse } from "../common/responseHandler";
import { HttpStatus } from "../common/constants/httpStatus.enum";
import { UserService } from "../service/user.service";
import { CreateUserDto } from "../dto/user/createUser.dto";

export class UserController {
    private static instance: UserController;
    userService: UserService;

    public static getInstance(): UserController {
        if (!UserController.instance) {
            UserController.instance = new UserController();
        }
        return UserController.instance;
    }

    private constructor() {
        this.userService = UserService.getInstance();
    }

    createUser = async (req:Request , res:Response) => {
        try {
            const userData = req.body;
            const newUser = await this.userService.createUser(userData);
            return successResponse(HttpStatus.CREATED, res, newUser, false);
        } catch (error:any) {
            if(error.message === "User not found") {
                return errorResponse(HttpStatus.NOT_FOUND, res, { message: "User not found", key: "" });
            } else {
                return errorResponse(HttpStatus.INTERNAL_SERVER_ERROR, res, { message: "An error occurred while creating the user", key: "" });
            }
        }
    }

    getUserByEmail = async (req:Request , res:Response) => {
        try{
            const user = req.body as CreateUserDto;
            const newUser = await this.userService.createUser(user);
            return successResponse(HttpStatus.CREATED, res, newUser, false);
        }catch(error:any) {
            return errorResponse(HttpStatus.INTERNAL_SERVER_ERROR, res, { message: "An error occurred while fetching the user", key: "" });
        }
        
    }
}