import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ContactService } from 'src/app/Services/contact.service';
import { Contact } from 'src/app/Shared/contact.Model';

@Component({
  selector: 'app-contact-component',
  templateUrl: './contact-component.component.html',
  styleUrls: ['./contact-component.component.css']
})
export class ContactComponentComponent {
  constructor(public contactService: ContactService, private route: Router) { }


  Send(data: Contact) {
    this.contactService.Create().subscribe(res => {
      this.contactService.LoanData = data
      alert("Successfully Send!")
    })}
}
