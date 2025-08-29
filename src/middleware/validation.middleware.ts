import Ajv from "ajv";
import ajvFormats from "ajv-formats";
import ajvErrors from "ajv-errors";
import { NextFunction, Request, Response } from "express";
import { error } from "console";
import { errorResponse } from "../common/responseHandler";
import { HttpStatus } from "../common/constants/httpStatus.enum";
import { Errors } from "../common/constants/errors.constants";

function createajv(){
    const ajv = new Ajv({ allErrors: true });
    ajvFormats(ajv);
    ajvErrors(ajv);

    // ajv.addFormat("date-time", /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d{1,3})?Z$/);

    return ajv;
}

export function validateRequestBody(schema:any) : (req:Request, res:Response, next:NextFunction) => void {
    const ajv = createajv();

    return (req:Request, res:Response, next:NextFunction) => {
        const isValidRequestBody = ajv.validate(schema, req.body); 

        if (!isValidRequestBody) {
            return errorResponse(
                HttpStatus.BAD_REQUEST,
                res,
                Errors.INVALID_ID_REQUEST_BODY_FORMAT
            );
        }

        next();
    }
}