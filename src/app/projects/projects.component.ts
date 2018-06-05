import { Component, OnInit } from '@angular/core';
import { Project} from '../models/project';
import {ProjectService} from '../services/project.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  projects: Project[]

  constructor(private projectService: ProjectService ) { }

  ngOnInit() {
  }

  GetProjectsWithProductsForOneExec(salesId: number) {
    this.projectService.getProjectsWithProductsForOneExec(salesId).subscribe(
      data => {
        this.projects = data as Project[];
      },
      err => console.error(err),
      () => console.log('projects Loaded')
    );
  }

}
