import {UserRequest } from '../entities/user';
import {insertUser} from "../repository/user";

export default (payload: UserRequest) => {
   insertUser({fullName: payload.fullName, documentNumber: payload.documentNumber});
}