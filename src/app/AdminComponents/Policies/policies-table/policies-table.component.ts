import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PolicyService } from 'src/app/Services/policy.service';
import { Policy } from 'src/app/Shared/policy.model';

@Component({
  selector: 'app-policies-table',
  templateUrl: './policies-table.component.html',
  styleUrls: ['./policies-table.component.css']
})
export class PoliciesTableComponent implements OnInit {
constructor(public PolicyService:PolicyService,private route:Router)
{}
ngOnInit(): void {
  this.PolicyService.Get().subscribe(data=>{
    this.PolicyService.PolicyList=data;
  })
}
EditPolicy(data:Policy){
  this.PolicyService.PolicyData=data;
  this.route.navigate(["PoliciesForm"]);
}


Delete(id:number){
this.PolicyService.Delete(id);
}
}
