import { LoanFacilities } from "./loan-facilities.model";

export class LoanAmount {
    amountId: number;
    amountValue: string | null;
    amountPremium: string | null;
    interest:number
    loanFacilities: LoanFacilities[] | null;

}
