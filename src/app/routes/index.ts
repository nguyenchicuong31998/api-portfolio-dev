import { Application } from "express";
import userRoute from "./users";

class Routes {
    static mapRoute(app: Application) {
        app.use("/users", userRoute);
    }
}

export default Routes;
