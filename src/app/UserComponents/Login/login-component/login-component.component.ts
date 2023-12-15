import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/Services/authentication.service';
import { Login } from 'src/app/Shared/login.Model';
import { Users } from 'src/app/Shared/users.model';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent {
  constructor(public LoginService: AuthenticationService,private router:Router) { }

  LoginUser(data: Login) {
    this.LoginService.login(data).subscribe(
      (res: any) => {
        if (res) {
          const token = localStorage.getItem('token');
          const role = localStorage.getItem('roles');
  
          if (token != null) {
            if (role === 'admin') {
              this.router.navigate(['/dashboard']);
            } else if (role === 'user') {
              this.router.navigate(['/']);
            }
          }
        } else {
          alert('Login successful!'); // Modify this based on your requirements
        }
      },
      (error) => {
        // Handle error from API call
        console.error('Error during login:', error);
  
        // Check if the error has a specific message property
        const errorMessage = error.error && error.error.message ? error.error.message : 'An error occurred during login. Please try again.';
  
        // Check for Unauthorized (401) status and show a specific message
        if (error.status === 401) {
          alert('Please check your email and password.');
        } else {
          alert(errorMessage);
        }
      }
    );
  }
  
  
}
