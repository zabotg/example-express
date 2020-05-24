import User from "@src/entities/user";
import userRequest from "@src/entities/userRequest";
import { uuid } from "uuidv4";

export default (request: userRequest): User| undefined=> {
    if(request.fullName && request.fullName) {
        const user: User = {
            id: uuid(),
            fullName: request.fullName,
            createdAt: Date.now(),
            updatedAt: Date.now(),
        }
        return user;
    }
    console.log("OPS! Wrong payload.")
    return;
}