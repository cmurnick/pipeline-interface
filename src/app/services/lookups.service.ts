import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { SalesExec} from '../models/sales-exec';
import { Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LookupsService {

  private apiUrl = 'http://localhost:52835/';


  constructor(
    private http: HttpClient) {
  }

  getSalesExecs() {
    const url = this.apiUrl + 'lookup/salesexec';
    return this.http.get(url);
  }
}
