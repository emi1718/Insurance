export class Transaction {
    transactionID: number;
    policyID: number;
    transactionDate: Date;
    transactionType?: string;
    amount: number;
    status?: string;
}
