import { Router,Request,Response } from "express";
import { CustomerController } from "../controller/customer.controller";

export class CustomerRoute {
    // getRouter(): import("express-serve-static-core").RequestHandler<{}, any, any, import("qs").ParsedQs, Record<string, any>> {
    //     throw new Error("Method not implemented.");
    // }
    private static instance: CustomerRoute;
    private router: Router;
    private customerController: CustomerController;

    public static getInstance(): CustomerRoute {
        if (!CustomerRoute.instance) {
            CustomerRoute.instance = new CustomerRoute();
        }
        return CustomerRoute.instance;
    }
    
    private constructor() {
        this.router = Router();
        this.customerController = CustomerController.getInstance();
        this.setupRoutes();
    }

    private setupRoutes() {
        this.router.get("/", this.customerController.getCustomer);
    }

    public getRouter(): Router {
        return this.router;
    }
}
