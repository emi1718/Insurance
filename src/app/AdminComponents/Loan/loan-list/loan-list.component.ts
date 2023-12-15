import { Component, OnInit } from '@angular/core';
import { LoanFacilitiesService } from 'src/app/Services/loan-facilities.service';

@Component({
  selector: 'app-loan-list',
  templateUrl: './loan-list.component.html',
  styleUrls: ['./loan-list.component.css']
})
export class LoanListComponent implements OnInit {

  constructor(public LoanList:LoanFacilitiesService){}
  ngOnInit(): void {
    this.LoanList.Get().subscribe(res=>{

              this.LoanList.LoanList=res
    })

  }
}
