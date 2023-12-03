import { DatePipe } from "@angular/common";
import { PolicyHolder } from "./policy-holder.model";

export class Users {

    userID: number
    registrationDate: Date
    name: string
    email: string
    password: string
    phone: string
    address: string
    status: string
    policyHolders: PolicyHolder[]
}
