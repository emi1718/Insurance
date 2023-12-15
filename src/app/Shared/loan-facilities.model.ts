import { LoanAmount } from "./loan-amount.Model";

export class LoanFacilities {
    loanId: number=0;
    loanType?: string | null;
    holderName?: string | null;
    holderEmail?: string | null;
    amountPremium:string | null;

    status?: string | null;
    amountId?: number | null;
    amountTable?: LoanAmount | null;
}
