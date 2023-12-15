import { Component } from '@angular/core';
import { TransactionService } from 'src/app/Services/transaction.service';
import { Transaction } from 'src/app/Shared/transaction.model';
import { PolicyHeaderComponent } from '../../PolicyForm/policy-header/policy-header.component';
import { PolicyHolderService } from 'src/app/Services/policy-holder.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-transaction-form',
  templateUrl: './transaction-form.component.html',
  styleUrls: ['./transaction-form.component.css']
})
export class TransactionFormComponent {
  constructor(public transaction: TransactionService, public policyHolder: PolicyHolderService, private router: Router) { }
  

  UserName = localStorage.getItem('userName');
  Email = localStorage.getItem('userEmail');
  mydata:Transaction=new Transaction()
  AddTransaction(data: Transaction) {
  
    



this.mydata.cardNumber=data.cardNumber
this.mydata.cvv=data.cvv;
this.mydata.policyHolderName=this.UserName;
this.mydata.policyHolderEmail=this.Email;
this.mydata.expDate=data.expDate;
this.mydata.pin=data.pin

    this.transaction.Create(this.mydata).subscribe(res => {
      if (res) {
        this.router.navigate(["/MyPolicy"]);
        console.log(res)
      }})
  console.log(data)

    }


  }

