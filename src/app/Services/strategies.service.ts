import { Injectable } from '@angular/core';
import { Strategies } from '../Shared/strategies.model';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StrategiesService {

 
  StrategiesUrl: string = "https://localhost:7297/api/Strategies";
  StrategiesList: Strategies[] = [];
  StrategiesData: Strategies = new Strategies();
  constructor(private http: HttpClient, private route: Router) { }


  // Show Admin List
  Get(): Observable<Strategies[]> {
    return this.http.get<Strategies[]>(this.StrategiesUrl);
  }

  //Create Admin 
  Create() {
    return this.http.post(this.StrategiesUrl, this.StrategiesData);
  }

  // Edit Admin
  Edit() {

    return this.http.put(`${this.StrategiesUrl}/${this.StrategiesData.strategiesId}`, this.StrategiesData)
  }

  //Delete Admin
  Delete(id: number) {

    this.http.delete(`${this.StrategiesUrl}/${id}`);

  }
}
