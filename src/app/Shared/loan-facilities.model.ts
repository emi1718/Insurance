import { LoanAmount } from "./loan-amount.Model";

export class LoanFacilities {
    loanId: number;
    status?: string;
    amountId?: number; // Assuming this corresponds to the AmountId property in C# class
    loanAmount?: LoanAmount; // Assuming LoanAmount is a related entity
    loanAmountString?: string; // NotMapped property
    premiumAmount?: string; 

}
