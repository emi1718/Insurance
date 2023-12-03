import { Transaction } from "./transaction.model"

export class Policy {

    policyID: number
    policyHolderId: number
    policyType: string
    coverageDetail: string
    premiumAmount: string
    duration: string
    startDate: number
    endDate: number
    transactions: Transaction[]


}
