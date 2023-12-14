import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoanAmountService } from 'src/app/Services/loan-amount.service';
import { LoanAmount } from 'src/app/Shared/loan-amount.Model';

@Component({
  selector: 'app-loan-form',
  templateUrl: './loan-form.component.html',
  styleUrls: ['./loan-form.component.css']
})
export class LoanFormComponent {
  constructor(public loanAmount: LoanAmountService, private route: Router) { }

  AddAmount(Data: LoanAmount) {
    if (Data.amountId > 0) {
      
    }else{
      this.loanAmount.Create().subscribe(res => {
        this.loanAmount.LoanData = Data;
        this.route.navigate(["/LoanAmount"]);
      })

    }

  }
}
