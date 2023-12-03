import { Injectable } from '@angular/core';
import { Users } from '../Shared/users.model';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  UserUrl: string = "https://localhost:7297/api/Users";
  UserList: Users[] = [];
  UserData: Users = new Users();
  constructor(private http: HttpClient, private route: Router) { }


  // Show Admin List
  Get(): Observable<Users[]> {
    return this.http.get<Users[]>(this.UserUrl);
  }

  //Create Admin 
  Create() {
    return this.http.post(this.UserUrl, this.UserData);
  }

  // Edit Admin
  Edit() {

    return this.http.put(`${this.UserUrl}/${this.UserData.userID}`, this.UserData)
  }

  //Delete Admin
  Delete(id: number) {

    this.http.delete(`${this.UserUrl}/${id}`);

  }
}
