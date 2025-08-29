import { Router } from "express";
import { UserController } from "../controller/user.controller";
import { validateRequestBody } from "../middleware/validation.middleware";
import { createUserSchema } from "../dto/user/createUser.dto";

export class UserRoutes {
    public getRouter(): Router {
        return this.router;
    }
    // getRouter(): import("express-serve-static-core").RequestHandler<{}, any, any, import("qs").ParsedQs, Record<string, any>> {
    //     throw new Error("Method not implemented.");
    // }
    private userController: UserController;
    private static instance: UserRoutes;
    private router: Router;

    private constructor() {
        this.userController = UserController.getInstance();
        this.router = Router();
        this.setupRoutes();
    }
    
    private setupRoutes() {
        this.router.post("/", validateRequestBody(createUserSchema), this.userController.createUser);
        this.router.get("/", (req, res) => {
            res.send("User route is working!");
        });
        this.router.get("/:email", this.userController.getUserByEmail);
    }

    public static getInstance(): UserRoutes {
        if (!UserRoutes.instance) {
            UserRoutes.instance = new UserRoutes();
        }
        return UserRoutes.instance;
    }
}