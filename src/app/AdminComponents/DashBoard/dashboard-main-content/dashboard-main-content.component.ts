import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/Services/authentication.service';
import { LoanFacilitiesService } from 'src/app/Services/loan-facilities.service';
import { PolicyHolderService } from 'src/app/Services/policy-holder.service';
import { PolicyHolder } from 'src/app/Shared/policy-holder.model';
import { Users } from 'src/app/Shared/users.model';

@Component({
  selector: 'app-dashboard-main-content',
  templateUrl: './dashboard-main-content.component.html',
  styleUrls: ['./dashboard-main-content.component.css']
})
export class DashboardMainContentComponent implements OnInit {
constructor(private UserService:AuthenticationService,private loan:LoanFacilitiesService,private Insurance:PolicyHolderService){}

CountUser=0;
CountSubmitInsurance=0;
applyLoan=0;
ngOnInit(): void {
            this.UserService.Get("user").subscribe(res=>{

                      this.CountUser=res.length;
            })


            this.loan.Get().subscribe(res=>{

                           this.applyLoan=res.length

            })

          this.Insurance.Get().subscribe(res=>{

                         this.CountSubmitInsurance=res.length

          })
         
}

}
