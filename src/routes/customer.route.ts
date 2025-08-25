import { Router,Request,Response } from "express";

export class CustomerRoute {
    private static instance: CustomerRoute;
    public static getInstance(): CustomerRoute {
        if (!CustomerRoute.instance) {
            CustomerRoute.instance = new CustomerRoute();
        }
        return CustomerRoute.instance;
    }
    public router: Router;
    private constructor() {
        this.router = Router();
        this.setupRoutes();
    }

    private setupRoutes() {
        this.router.get("/", (req, res) => {
            res.send("Customer Route");
        });
    }

    public getRouter(): Router {
        return this.router;
    }
}