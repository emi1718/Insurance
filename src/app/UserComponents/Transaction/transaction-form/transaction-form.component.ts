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

  AddTransaction(data: Transaction) {
  
    

    this.policyHolder.Create().subscribe(res => {
      console.log(res);
    })

    this.transaction.Create().subscribe(res => {
      if (res) {
        this.transaction.TransactionData.policyHolderName=this.UserName;
        this.transaction.TransactionData.policyHolderEmail=this.Email
        this.transaction.TransactionData = data
        this.router.navigate(["/MyPolicy"]);
        console.log(res)
      }})
  console.log(data)

    }


  }

