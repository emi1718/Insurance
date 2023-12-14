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


    this.LoginService.login(data).subscribe(res => {

      if (res) {

        const Token = localStorage.getItem('token');
        const Role = localStorage.getItem('roles');

        if(Token !=null){
                        if(Role== "admin"){
                          this.router.navigate(["/dashboard"])
                        }
                        if(Role== "user"){
                          this.router.navigate(["/"])
                        }
                        
        }

       
      } else {
        alert("Password or Email Wrong!")
      }


    })

  }
}
