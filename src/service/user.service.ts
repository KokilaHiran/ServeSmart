import { UserDAO } from "../dao/user.dao";
import { IUSER } from "../interface/models/user.interface";
import User from "../models/user.model";

export class UserService {
    private static instance: UserService;
    private userDAO: UserDAO;
    public static getInstance(): UserService {
        if (!UserService.instance) {
            UserService.instance = new UserService();
        }
        return UserService.instance;
    }

    private constructor() {
        this.userDAO = UserDAO.getInstance();
    }

    public async createUser(userData: IUSER): Promise<IUSER> {
        try {
            const newUser = await this.userDAO.createUser(userData);
            return newUser;
        } catch (error) {
            throw new Error("Error creating user");
        }
    }

    public async getUserByEmail(email: string): Promise<IUSER | null> {
        const user = await User.findOne({ email });
        if (!user) {
            const notFoundError = new Error("User not found");
            (notFoundError as any).status = 404;
            throw notFoundError;
        }
        return user.toObject() as unknown as IUSER;
    }
}