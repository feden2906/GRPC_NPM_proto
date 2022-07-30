import { UserRoleEnum, UserStatusEnum } from "../../enum";
import { IBasic } from "../basic.interface";

export interface IUser extends IBasic {
    firstName: string;
    lastName: string;
    email: string;
    role: UserRoleEnum;
    status: UserStatusEnum;
}
