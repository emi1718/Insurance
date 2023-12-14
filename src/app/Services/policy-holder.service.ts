import { Injectable } from '@angular/core';
import { PolicyHolder } from '../Shared/policy-holder.model';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PolicyHolderService {

  PolicyHolderUrl: string = "https://localhost:7297/api/PolicyHolders";
  PolicyHolderList: PolicyHolder[] = [];
  PolicyHolderData: PolicyHolder = new PolicyHolder();
  constructor(private http: HttpClient, private route: Router) { }

  getEmail(data: string): Observable<PolicyHolder[]> {

    return this.http.get<PolicyHolder[]>(`${this.PolicyHolderUrl}/${data}`)

  }

  // Show  List
  Get(): Observable<PolicyHolder[]> {
    return this.http.get<PolicyHolder[]>(this.PolicyHolderUrl);
  }

  //Create Admin 
  Create() {
    return this.http.post(this.PolicyHolderUrl, this.PolicyHolderData);
  }

  // Edit Admin
  Edit() {

    return this.http.put(`${this.PolicyHolderUrl}/${this.PolicyHolderData.policyHolderID}`, this.PolicyHolderData)
  }

  //Delete Admin
  Delete(id: number) {

    this.http.delete(`${this.PolicyHolderUrl}/${id}`);

  }
}
