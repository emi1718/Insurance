import { Component, OnInit } from '@angular/core';
import { ContactService } from 'src/app/Services/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
constructor(public contact:ContactService){}

ngOnInit(): void {
  
  this.contact.Get().subscribe(res=>{

                         this.contact.LoanList=res

  })
}

}
