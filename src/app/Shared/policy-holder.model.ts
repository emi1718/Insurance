import { LoanFacilities } from "./loan-facilities.model";
import { Policy } from "./policy.model";

export class PolicyHolder {
    policyHolderID: number;
    userID: number;
    dob: string;
    policies: Policy[];
    loanFacilities: LoanFacilities[];
}
