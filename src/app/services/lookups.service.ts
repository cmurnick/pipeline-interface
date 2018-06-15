import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { SalesExec} from '../models/sales-exec';
import { Observable} from 'rxjs';


@Injectable
({
  providedIn: 'root'
})
export class LookupsService {

  private apiUrl = 'http://localhost:52835/';


  constructor(
    private http: HttpClient) {
  }

  getSalesExecs() {
    const url = this.apiUrl + 'lookup/salesexecs';
    return this.http.get(url);
  }

  getVbCarriers() {
    const url = this.apiUrl + 'lookup/vbcarriers';
    return this.http.get(url);
  }

  getEnrollmentMethods() {
    const url = this.apiUrl + 'lookup/enrollmentmethods';
    return this.http.get(url);
  }

  getClassifications() {
    const url = this.apiUrl + 'lookup/classifications';
    return this.http.get(url);
  }

  getEnrollmentSystems() {
    const url = this.apiUrl + 'lookup/enrollmentsystems';
    return this.http.get(url);
  }

  getProducts() {
    const url = this.apiUrl + 'lookup/products';
    return this.http.get(url);
  }

  getAllForProject(projectId: number) {
    const url = this.apiUrl + 'lookup/products/' + projectId;
    return this.http.get(url);
  }
}
