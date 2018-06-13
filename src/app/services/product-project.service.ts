import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductProjectService {
  private apiUrl = 'http://localhost:52835/';

  constructor(
    private http: HttpClient,
    ) { }

  getProductProjects() {
    const url = this.apiUrl + '/productproject';
    return this.http.get(url);
  }
}



