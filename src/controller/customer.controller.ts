import { Request, Response } from "express";
import { errorResponse, successResponse } from "../common/responseHandler";
import { HttpStatus } from "../common/constants/httpStatus.enum";

export class CustomerController {
    private static instance: CustomerController;

    public static getInstance(): CustomerController {
        if (!CustomerController.instance) {
            CustomerController.instance = new CustomerController();
        }
        return CustomerController.instance;
    }

    private constructor() {}

    getCustomer = async (req:Request, res:Response) => {
        try {
            const { id } = req.params;
            const customer = {
                id:1,
                name:"John Doe",
                email:"john.doe@example.com",
                phone:"123-456-7890",
                address:"123 Main St, Anytown, USA",
            };
            //throw new Error("Error fetching customer");
            successResponse(HttpStatus.OK, res, customer, false);
        } catch (error) {
            errorResponse(
                HttpStatus.INTERNAL_SERVER_ERROR,
                res,
                { message: "Bad request", key: "" }
            );
        }
    }

}