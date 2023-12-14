import { Component } from '@angular/core';
import { PolicyService } from 'src/app/Services/policy.service';

@Component({
  selector: 'app-feature-component',
  templateUrl: './feature-component.component.html',
  styleUrls: ['./feature-component.component.css']
})
export class FeatureComponentComponent {
constructor(public policyService:PolicyService){}

token=localStorage.getItem('token');
}
