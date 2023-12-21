import { LoanAmount } from "./loan-amount.Model";

export class LoanFacilities {
    loanId: number=0;
    loanType?: number ;
    holderName?: string | null;
    holderEmail?: string | null;
    amountPremium:string | null;
    interest:number
    status?: string | null;
    amountId?: number | null;
    amountTable?: LoanAmount | null;
}
