import User from "../models/user.model";
import { IUSER } from "../interface/models/user.interface";

export class UserDAO {
    private static instance: UserDAO;                       
    public static getInstance(): UserDAO {
        if (!UserDAO.instance) {
            UserDAO.instance = new UserDAO();
        }
        return UserDAO.instance;
    }

    private constructor() {}

    public async createUser(userData: IUSER): Promise<IUSER> {
        try {
            const newUserDoc = await User.create(userData);
            const newUser = newUserDoc.toObject();
            return { ...newUser, _id: newUser._id.toString() } as IUSER;
        } catch (error:any) {
            throw new Error("Error creating user");
        }
    }

    public async getUserByEmail(email: string): Promise<IUSER | null> {
        try {
            const user = await User.findOne({ email });
            if (!user) {
                throw new Error("User not found");
            }
            const userObj = user.toObject();
            return { ...userObj, _id: userObj._id.toString() } as IUSER;
        } catch (error:any) {
            throw new Error("Error fetching user by email");
        }
    }
}