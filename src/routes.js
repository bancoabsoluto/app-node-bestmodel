import { getUsers } from "./users/getusers.js";

export const routes = (app) => {
    app.get("/", getUsers);
};