import { Injectable } from '@angular/core';
import {ProjectService} from './project.service';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LeadershipService {
 private apiUrl = 'http://localhost:52835/';

  constructor( private http: HttpClient) { }

  get() {
    const url = this.apiUrl + 'projects/leadership';
    return this.http.get(url);
  }
}
