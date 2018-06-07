import { Component, OnInit, ViewChild  } from '@angular/core';
import {ProjectService} from '../services/project.service';
import { ActivatedRoute, Router } from '@angular/router';
import { SalesExec} from '../models/sales-exec';
import { LookupsService} from '../services/lookups.service';
import { Project} from '../models/project';
import { NgForm} from '@angular/forms';
import {Input} from '@angular/compiler/src/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})

export class ProjectsComponent implements OnInit {
  @ViewChild(NgForm) editForm: NgForm;
  projects: Project[];
  salesExecs: SalesExec[];
  selectedExec: SalesExec;
  project: Project;
  singleProject: Project;


  constructor(
    private projectService: ProjectService,
    private lookupsService: LookupsService,
    // private location: Location,
    // private route: ActivatedRoute,
    // private router: Router
    ) { }

  ngOnInit() {
    this.getSalesExecs();
  }

  getProjectsWithProductsForOneExec(salesExecId: number) {
    this.projectService.getProjectsWithProductsForOneExec(salesExecId).subscribe(
      data => {
        this.projects = data as Project[];
        console.log('sales data', this.projects);
      },
      err => console.error(err),
      () => console.log('projects Loaded')
    );
  }

  getSalesExecs() {
    this.lookupsService.getSalesExecs().subscribe(
      data => {
        this.salesExecs = data as SalesExec[];
        console.log('Sales Execs pulled', this.salesExecs);
      },
      err => console.log(err)
    );
  }

  selectSalesExec(salesExec: SalesExec) {
    this.selectedExec = salesExec;
    console.log('selected', this.selectedExec);
    this.getProjectsWithProductsForOneExec(2);
  }

  // selectedProject(singleProject)

}
