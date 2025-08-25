import { Router,Request,Response } from "express";

export class GreetingRoute {
    private static instance: GreetingRoute;
    public static getInstance(): GreetingRoute {
        if (!GreetingRoute.instance) {
            GreetingRoute.instance = new GreetingRoute();
        }
        return GreetingRoute.instance;
    }
    public router:Router;
    private constructor() {
        this.router = Router();
        this.setupRoutes();
    }

    private setupRoutes() {
        this.router.get("/", (req: Request, res: Response) => {
            res.send("Greeting Route");
        });
    }

    public getRouter(): Router {
        return this.router;
    }
}