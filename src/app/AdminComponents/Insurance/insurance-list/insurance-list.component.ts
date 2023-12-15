import { Component, OnInit } from '@angular/core';
import { PolicyHolderService } from 'src/app/Services/policy-holder.service';

@Component({
  selector: 'app-insurance-list',
  templateUrl: './insurance-list.component.html',
  styleUrls: ['./insurance-list.component.css']
})
export class InsuranceListComponent implements OnInit {
constructor(public Insurance:PolicyHolderService){}

ngOnInit(): void {
  
  this.Insurance.Get().subscribe(res=>{

            this.Insurance.PolicyHolderList=res
  })
}

}
