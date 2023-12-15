import { Component, OnInit } from '@angular/core';
import { LoanFacilitiesService } from 'src/app/Services/loan-facilities.service';
import { LoanFacilities } from 'src/app/Shared/loan-facilities.model';

@Component({
  selector: 'app-apply-page',
  templateUrl: './apply-page.component.html',
  styleUrls: ['./apply-page.component.css']
})
export class ApplyPageComponent implements OnInit {
constructor(public loan:LoanFacilitiesService)
{} 

Email = localStorage.getItem('userEmail');
ngOnInit(): void {
  this.loan.getByEmail(this.Email).subscribe(
    (res) => {
      this.loan.LoanList = res;
    },
    (error) => {
      console.error('Error fetching loan by email:', error);
    }
  );
}

}

