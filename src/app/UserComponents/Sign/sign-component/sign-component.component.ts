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

    this.UserService.register("user").subscribe(res => {
      if (res) {
        this.UserService.Data = data;
        this.router.navigate(["/Login"])
      } else {
        console.log("User failed")

      }


    })

  }
}
