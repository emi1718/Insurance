import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/Services/authentication.service';

@Component({
  selector: 'app-admin-table',
  templateUrl: './admin-table.component.html',
  styleUrls: ['./admin-table.component.css']
})
export class AdminTableComponent implements OnInit {
  constructor(public AdminService: AuthenticationService) { }

  ngOnInit(): void {
    this.AdminService.Get("Admin").subscribe(res => {

      this.AdminService.List = res;

    })
  }
}
