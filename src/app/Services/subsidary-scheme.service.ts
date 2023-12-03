import { Injectable } from '@angular/core';
import { SubsidiarySchemes } from '../Shared/subsidiary-schemes.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SubsidarySchemeService {

  SubUrl: string = "https://localhost:7297/api/SubsidiarySchemes";
  SubList: SubsidiarySchemes[] = [];
  SubData: SubsidiarySchemes = new SubsidiarySchemes();
  constructor(private http: HttpClient, private route: Router) { }


  // Show Admin List
  Get(): Observable<SubsidiarySchemes[]> {
    return this.http.get<SubsidiarySchemes[]>(this.SubUrl);
  }

  //Create Admin 
  Create() {
    return this.http.post(this.SubUrl, this.SubData);
  }

  // Edit Admin
  Edit() {

    return this.http.put(`${this.SubUrl}/${this.SubData.schemeId}`, this.SubData)
  }

  //Delete Admin
  Delete(id: number) {

    this.http.delete(`${this.SubUrl}/${id}`);

  }
}
