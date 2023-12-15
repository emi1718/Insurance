import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/Services/authentication.service';
import { LoanAmountService } from 'src/app/Services/loan-amount.service';


@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.css']
})
export class UserTableComponent implements OnInit  {
constructor(public UserService:AuthenticationService){}

ngOnInit(): void {
   this.UserService.Get("user").subscribe(res=>{

        this.UserService.List=res;

   })

}

}
