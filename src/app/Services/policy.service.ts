import { Injectable } from '@angular/core';
import { Policy } from '../Shared/policy.model';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PolicyService {

  
  PolicyUrl: string = "https://localhost:7297/api/Policies";
  PolicyList: Policy[] = [];
  PolicyData: Policy = new Policy();
  constructor(private http: HttpClient, private route: Router) { }


  // Show Admin List
  Get(): Observable<Policy[]> {
    return this.http.get<Policy[]>(this.PolicyUrl);
  }

  //Create Admin 
  Create() {
    return this.http.post(this.PolicyUrl, this.PolicyData);
  }

  // Edit Admin
  Edit() {

    return this.http.put(`${this.PolicyUrl}/${this.PolicyData.policyID}`, this.PolicyData)
  }

  //Delete Admin
  Delete(id: number) {

    this.http.delete(`${this.PolicyUrl}/${id}`);

  }
}
