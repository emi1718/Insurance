import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/Services/authentication.service';
import { PolicyHolderService } from 'src/app/Services/policy-holder.service';
import { PolicyService } from 'src/app/Services/policy.service';
import { PolicyHolder } from 'src/app/Shared/policy-holder.model';

@Component({
  selector: 'app-policy-component',
  templateUrl: './policy-component.component.html',
  styleUrls: ['./policy-component.component.css']
})
export class PolicyComponentComponent implements OnInit {
  constructor(public policy: PolicyHolderService, public policies: PolicyService,private route:Router) { }
  ngOnInit(): void {
    this.policies.Get().subscribe(res => {
      if (res) {
        this.policies.PolicyList = res;

      }


    })
  }
  UserName = localStorage.getItem('userName');
  Email = localStorage.getItem('userEmail');


  AddPolicy(data: PolicyHolder) {
    this.policy.PolicyHolderData = data
    this.policy.PolicyHolderData.policyHolderName=this.UserName;
    this.policy.PolicyHolderData.policyHolderEmail=this.Email;
    this.route.navigate(["/TransactionForm"])
  }

}
