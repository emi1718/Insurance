import { Component, OnInit } from '@angular/core';
import { PolicyHolderService } from 'src/app/Services/policy-holder.service';

@Component({
  selector: 'app-detail-component',
  templateUrl: './detail-component.component.html',
  styleUrls: ['./detail-component.component.css']
})
export class DetailComponentComponent implements OnInit {
  constructor(public PolicyHolder: PolicyHolderService) { }

  status: boolean = false;
  Email = localStorage.getItem('userEmail')
  ngOnInit(): void {
    
    this.PolicyHolder.getEmail(this.Email).subscribe(res => {
      console.log('API Response:', res);
    
      // Check if 'res' is an object
      if (typeof res === 'object' && !Array.isArray(res)) {
        
        this.PolicyHolder.PolicyHolderList = res; // Wrap the object in an array or handle it differently based on your requirements
      } else if (Array.isArray(res)) {
        this.PolicyHolder.PolicyHolderList = res;
      } else {
        console.error('Unexpected API response:', res);
      }
console.log(res)

    });
    
    
    


  }

 
  applyForLoan(data:string){}


}
