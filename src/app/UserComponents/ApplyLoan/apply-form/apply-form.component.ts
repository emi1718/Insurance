import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoanAmountService } from 'src/app/Services/loan-amount.service';
import { LoanFacilitiesService } from 'src/app/Services/loan-facilities.service';
import { LoanAmount } from 'src/app/Shared/loan-amount.Model';
import { LoanFacilities } from 'src/app/Shared/loan-facilities.model';

@Component({
  selector: 'app-apply-form',
  templateUrl: './apply-form.component.html',
  styleUrls: ['./apply-form.component.css']
})
export class ApplyFormComponent implements OnInit {
ngOnInit(): void {
 this.Amount.Get().subscribe(res=>{

                  this.Amount.LoanList=res
 })
}
constructor(public Loan:LoanFacilitiesService ,public Amount:LoanAmountService,private route :Router){}

UserName = localStorage.getItem('userName');
Email = localStorage.getItem('userEmail');
mydata: LoanFacilities = new LoanFacilities(); // Initialize mydata if not done elsewhere

AddLoan(data: number ) {
  this.mydata.holderEmail = this.Email;
  this.mydata.holderName = this.UserName;
  this.mydata.amountId = data;

  this.Loan.Create(this.mydata).subscribe(res => {
   
    console.log(this.mydata)
    this.route.navigate(["/MyLoan"])
    console.log(res);
  });
}



}
