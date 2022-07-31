import { UserRoleEnum, UserStatusEnum } from "../../enum";
import { IBasic } from "../basic.interface";

export interface IAuth extends IBasic {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    role: UserRoleEnum;
    status: UserStatusEnum;
}
