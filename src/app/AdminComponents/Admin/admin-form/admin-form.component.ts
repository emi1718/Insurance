import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/Services/authentication.service';
import { Users } from 'src/app/Shared/users.model';

@Component({
  selector: 'app-admin-form',
  templateUrl: './admin-form.component.html',
  styleUrls: ['./admin-form.component.css']
})
export class AdminFormComponent implements OnInit {
  constructor(public AdminService: AuthenticationService, private router: Router) {}

  ngOnInit(): void {
    // Initialization logic if needed
  }

  AddAdmin(data: Users) {
    this.AdminService.register("Admin").subscribe(
      (res) => {
        if (res) {
          this.AdminService.Data = data;
          this.router.navigate(['/Admin']);
        } else {
          console.error('Registration error:', 'User Already Exist');
          // Show an alert
          alert('User Already Exist');
        
        }
      },
      (err) => {
        console.error('HTTP error occurred:', err);
       
        alert('HTTP error occurred: ' + err.error);
       
      },
      
    );
  }
  
  

}





