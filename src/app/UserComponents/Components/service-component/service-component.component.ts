import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PolicyService } from 'src/app/Services/policy.service';
import { Policy } from 'src/app/Shared/policy.model';

@Component({
  selector: 'app-service-component',
  templateUrl: './service-component.component.html',
  styleUrls: ['./service-component.component.css']
})
export class ServiceComponentComponent implements OnInit {
constructor(public PolicyService:PolicyService,private route:Router){}
ngOnInit(): void {
  this.PolicyService.Get().subscribe(res=>{
   this.PolicyService.PolicyList=res
  })
}
Detail(data:Policy){

this.PolicyService.PolicyData=data
this.route.navigate(["Insurance"])
}
}