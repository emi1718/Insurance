import { Component } from '@angular/core';
import { LoanAmountService } from 'src/app/Services/loan-amount.service';

@Component({
  selector: 'app-loan-table',
  templateUrl: './loan-table.component.html',
  styleUrls: ['./loan-table.component.css']
})
export class LoanTableComponent {
  constructor(public loanAmount: LoanAmountService) { }

  ngOnInit(): void {
    this.loanAmount.Get().subscribe(res => {

      if (res) {

        this.loanAmount.LoanList = res;

      }

    })

  }
}
