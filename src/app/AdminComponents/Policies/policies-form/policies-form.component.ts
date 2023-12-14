import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PolicyService } from 'src/app/Services/policy.service';
import { Policy } from 'src/app/Shared/policy.model';

@Component({
  selector: 'app-policies-form',
  templateUrl: './policies-form.component.html',
  styleUrls: ['./policies-form.component.css']
})
export class PoliciesFormComponent {
  constructor(public PolicyService: PolicyService, private route: Router) { }

  AddPolicy(data: Policy) {
    if (data.policyID > 0) {
      // Edit existing policy
      this.PolicyService.Edit().subscribe(res => {
        if (res) {
          this.PolicyService.PolicyData = data;
          this.route.navigate(["/Policies"]);
        }
      });
    } else {
      // Create new policy
      this.PolicyService.Create().subscribe(res => {
        if (res) {
          this.PolicyService.PolicyData = data;
          this.route.navigate(["/Policies"]);
        }
      });
    }
  }
  



}

