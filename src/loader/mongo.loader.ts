import mongoose from "mongoose";
import { AppConfig } from "../config/app.config";

export class MongoLoader {
    private MONGODB_URL: string = AppConfig.MONGODB_URL ?? "";

    public async connect() {
        try {
            await mongoose.connect(this.MONGODB_URL);
            console.log("MongoDB connected successfully");
        } catch (error) {
            console.error("MongoDB connection error:", error);
        }
    }
        
}