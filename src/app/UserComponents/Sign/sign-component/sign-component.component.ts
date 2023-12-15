import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/Services/authentication.service';

import { Users } from 'src/app/Shared/users.model';

@Component({
  selector: 'app-sign-component',
  templateUrl: './sign-component.component.html',
  styleUrls: ['./sign-component.component.css']
})
export class SignComponentComponent {
  constructor(public UserService: AuthenticationService, private router: Router) { }

  AddUser(data: Users) {
    this.UserService.register("user").subscribe(
      (res: any) => {
        if (res) {
          this.UserService.Data = data;
          this.router.navigate(['/Login']);
        } else {
          console.log('User registration failed');
        }
      },
      (error) => {
        // Handle error from API call
        console.error('Error during user registration:', error);
  
        // Check if the error has a specific status code and response body
        if (error.status === 400 ) {
        
         
          alert('Registration Failed: Please ensure your password meets the following criteria:\n' +
            '- Must contain at least one non-alphanumeric character.\n' +
            '- Must contain at least one digit (0-9).\n' +
            '- Must contain at least one uppercase letter (A-Z).');
        } 
         if (error.status === 409) {
          // Handle the case where the user already exists
          alert('Registration Failed: User already exists. Please use a different email address or login.');
        } else {
          // Use console.log to display details to the console
        
          alert('Registration Failed: User already exists. Please use a different email address or login.');
          // Display a generic error message to the user
        
        }
      }
    );
  }
  
  
}
