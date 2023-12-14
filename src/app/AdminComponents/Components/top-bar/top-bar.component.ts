import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent {

  constructor(private route:Router){}
name=localStorage.getItem('userName');

LogOut(){

  localStorage.clear();
this.route.navigate(["/Login"])
}

}
