import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Project} from '../models/project';
import {Observable} from 'rxjs';
import {ServiceReturn} from '../models/service-return';


@Injectable({
  providedIn: 'root'
})

export class ProjectService {
  private apiUrl = 'http://localhost:52835/';


  constructor(
    private http: HttpClient) {
  }

  getProjectsWithProductsForOneExec(salesExecId: number) {
    const url = this.apiUrl + 'projects/' + salesExecId ;
    return this.http.get(url);
  }

  postProject(projectToSave): Observable<ServiceReturn> {
    return this.http.post<ServiceReturn>(this.apiUrl + 'projects/', projectToSave);

  }
}
