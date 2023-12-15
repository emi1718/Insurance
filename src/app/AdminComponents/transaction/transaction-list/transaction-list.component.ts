import { Component, OnInit } from '@angular/core';
import { TransactionService } from 'src/app/Services/transaction.service';

@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.css']
})
export class TransactionListComponent implements OnInit {
constructor(public transaction:TransactionService){


}
ngOnInit(): void {
     this.transaction.Get().subscribe(res=>{
                 this.transaction.TransactionList=res

     })

}

}
