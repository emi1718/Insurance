import { Component, OnInit } from '@angular/core';
import { PolicyHolderService } from 'src/app/Services/policy-holder.service';
import { PolicyHolder } from 'src/app/Shared/policy-holder.model';

@Component({
  selector: 'app-insurance-list',
  templateUrl: './insurance-list.component.html',
  styleUrls: ['./insurance-list.component.css']
})
export class InsuranceListComponent implements OnInit {
  constructor(public Insurance: PolicyHolderService) { }

  ngOnInit(): void {

    this.Insurance.Get().subscribe(res => {

      this.Insurance.PolicyHolderList = res
    })
  }

  activateItem(items: PolicyHolder) {

    items.status = 1;



    this.Insurance.Edit(items).subscribe(res => {

      console.log(res)
      alert("Update")

    })


  }
  deactivateItem(items: PolicyHolder) {




    items.status = 0;


    this.Insurance.Edit(items).subscribe(res => {

      console.log(res)
      alert("Update")
    })
  }
}
