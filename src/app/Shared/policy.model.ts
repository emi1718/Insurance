import { Transaction } from "./transaction.model"

export class Policy {

    policyID: number
    policyType: string
    coverageDetail: string
    premiumAmount: string
    duration: string
  
    transactions: Transaction[]


}
