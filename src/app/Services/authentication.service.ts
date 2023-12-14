import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Users } from '../Shared/users.model';
import { Login } from '../Shared/login.Model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  LoginUrl:string="https://localhost:7297/api/Authentication/Login"
  List:Users[]=[];
  baseUrl: string = "https://localhost:7297/api/Authentication?role=";
  Data: Users = new Users();
 loginData:Login=new Login()
  constructor(private http: HttpClient,private route:Router) { }


Get(role:string):Observable<Users[]>{
    return this.http.get<Users[]>(`${this.baseUrl}${role}`)

}

  register(role: string) {
    return this.http.post(`${this.baseUrl}${role}`, this.Data, { observe: 'response', responseType: 'text' }).pipe(
      catchError((error) => {
        console.error('Registration error:', error);
        return throwError('Registration failed. Please try again.');
      })
    );
  }

login(data: Login): Observable<HttpResponse<string>> {
  return this.http.post(this.LoginUrl, data, { observe: 'response', responseType: 'text' })
    .pipe(
      tap(response => {
        console.log('Response:', response);
        if (response.status === 200) {
          this.saveTokenAndRole(response.body);
          console.log('Token and role saved to localStorage');
        } else {
          console.error('Unexpected response status:', response.status);
        }
      }),
      catchError(error => {
        console.error('Error during login:', error);
        return throwError(error);
      })
    );
}


  
saveTokenAndRole(responseBody: string) {
  console.log('Response Body:', responseBody);

  try {
    const response = JSON.parse(responseBody);
    console.log('Parsed Response:', response);

    if (response && response.token && response.expires && response.roles && response.userId && response.userName && response.userEmail) {
      const { token, expires, roles, userId, userName, userEmail } = response;

      localStorage.setItem('token', token);
      localStorage.setItem('expires', expires);
      localStorage.setItem('roles', roles);
      localStorage.setItem('userId', userId);
      localStorage.setItem('userName', userName);
      localStorage.setItem('userEmail', userEmail);

      console.log('Token, Expires, Roles, UserId, UserName, and UserEmail saved to localStorage');
    } else {
      console.error('Token, Expires, Roles, UserId, UserName, or UserEmail missing in response body');
    }
  } catch (error) {
    console.error('Error parsing response body:', error);
  }
}

logout(){
localStorage.clear();
this.route.navigate(["/Login"])
}


  
}
