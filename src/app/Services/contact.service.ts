import { Injectable } from '@angular/core';
import { Contact } from '../Shared/contact.Model';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  LoanUrl: string = "https://localhost:7297/api/Contacts";
  LoanList: Contact[] = [];
  LoanData: Contact = new Contact();
  constructor(private http: HttpClient, private route: Router) { }


  // Show Admin List
  Get(): Observable<Contact[]> {
    return this.http.get<Contact[]>(this.LoanUrl);
  }

  //Create Admin 
  Create() {
    return this.http.post(this.LoanUrl, this.LoanData);
  }

  // Edit Admin
  Edit() {

    return this.http.put(`${this.LoanUrl}/${this.LoanData.contactId}`, this.LoanData)
  }

  //Delete Admin
  Delete(id: number) {

    this.http.delete(`${this.LoanUrl}/${id}`);

  }
}
