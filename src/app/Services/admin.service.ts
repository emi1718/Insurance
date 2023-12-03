import { Injectable } from '@angular/core';
import { Admin } from '../Shared/admin.model';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  AdminUrl: string = "https://localhost:7297/api/Admins";
  AdminList: Admin[] = [];
  AdminData: Admin = new Admin();
  constructor(private http: HttpClient, private route: Router) { }


  // Show Admin List
  GetData(): Observable<Admin[]> {
    return this.http.get<Admin[]>(this.AdminUrl);
  }

  //Create Admin 
  CreateAdmin() {
    return this.http.post(this.AdminUrl, this.AdminData);
  }

  // Edit Admin
  EditAdmin() {

    return this.http.put(`${this.AdminUrl}/${this.AdminData.AdminID}`, this.AdminData)
  }

  //Delete Admin
  DeleteAdmin(id: number) {

    this.http.delete(`${this.AdminUrl}/${id}`);

  }
}
