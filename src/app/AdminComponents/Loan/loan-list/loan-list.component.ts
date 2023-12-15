import { Component, OnInit } from '@angular/core';
import { LoanFacilitiesService } from 'src/app/Services/loan-facilities.service';
import { LoanFacilities } from 'src/app/Shared/loan-facilities.model';

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

  activateItem(item: LoanFacilities) {
    
    item.status = 'active';
    this.LoanList.Edit(item).subscribe(res=>{

            alert("Actived!")

    }) 
  }
  
  cancelItem(item:LoanFacilities) {
    // Logic to handle cancellation
    item.status = 'Pending'; // Assuming you update the status property



    this.LoanList.Edit(item).subscribe(res=>{

      alert("Still Pending!")

}) 
  }
  
}
