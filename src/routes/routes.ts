import { Router as ExpressRouter } from "express";
import { GreetingRoute } from "./greeting.route";
import { CustomerRoute } from "./customer.route";

export class AppRouter {
    public router: ExpressRouter;
    private static instance: AppRouter;

    public static getInstance(): AppRouter {
        if (!AppRouter.instance) {
            AppRouter.instance = new AppRouter();
        }
        return AppRouter.instance;
    }

    private constructor() {
        this.router = ExpressRouter();
        this.setupRoutes();
    }

    setupRoutes() {
        this.router.use("/greeting", GreetingRoute.getInstance().getRouter());
        this.router.use("/customer", CustomerRoute.getInstance().getRouter());
    }


}