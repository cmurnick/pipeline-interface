import { Component, OnInit, ViewChild  } from '@angular/core';
import {ProjectService} from '../services/project.service';
import { ActivatedRoute, Router } from '@angular/router';
import { SalesExec} from '../models/sales-exec';
import { Product } from '../models/product';
import { EnrollmentSystem} from '../models/enrollment-system';
import { EnrollmentMethod} from '../models/enrollment-method';
import { VbCarrier} from '../models/vb-carrier';
import { LookupsService} from '../services/lookups.service';
import { Project} from '../models/project';
import { Classification} from '../models/classification';
import { NgForm} from '@angular/forms';
import {Input} from '@angular/compiler/src/core';
import {ServiceReturn} from '../models/service-return';
import {ProjectToSave} from '../models/project-to-save';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})

export class ProjectsComponent implements OnInit {
  @ViewChild(NgForm) editForm: NgForm;
  projects: Project[];
  salesExecs: SalesExec[];
  selectedExecId: number;
  singleProject: Project;
  classifications: Classification[];
  products: Product[];
  vbCarriers: VbCarrier[];
  enrollmentMethods: EnrollmentMethod[];
  enrollmentSystems: EnrollmentSystem[];
  serviceReturn: ServiceReturn;
  projectToSave: ProjectToSave;

  constructor(
    private projectService: ProjectService,
    private lookupsService: LookupsService,
    // private location: Location,
    // private route: ActivatedRoute,
    // private router: Router
    ) { }

  ngOnInit() {
    this.getSalesExecs();
    this.getClassifications();
    this.getProducts();
    this.getEnrollmentMethods();
    this.getEnrollmentSystems();
    this.getVbCarriers();
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

  getClassifications() {
    this.lookupsService.getClassifications().subscribe(
      data => {
        this.classifications = data as Classification[];
      },
      err => console.log(err)
    );
  }

  getProducts() {
    this.lookupsService.getProducts().subscribe(
      data => {
        this.products = data as Product[];
      },
      err => console.log(err)
    );
  }

  getVbCarriers() {
    this.lookupsService.getVbCarriers().subscribe(
      data => {
        this.vbCarriers = data as VbCarrier[];
      },
      err => console.log(err)
    );
  }

  getEnrollmentMethods() {
    this.lookupsService.getEnrollmentMethods().subscribe(
      data => {
        this.enrollmentMethods = data as EnrollmentMethod[];
      },
      err => console.log(err)
    );
  }

  getEnrollmentSystems() {
    this.lookupsService.getEnrollmentSystems().subscribe(
      data => {
        this.enrollmentSystems = data as EnrollmentSystem[];
      },
      err => console.log(err)
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

  selectedProject(project: Project) {
    this.singleProject = project;
    console.log('selected', this.singleProject);
  }


  SaveModal (singleProject: Project) {
    const projectToSave = ProjectToSave;
    //   {
    //   ProjectId: singleProject.ProjectId,
    //   CompanyName: singleProject.CompanyName,
    //   NumberEligible: singleProject.NumberEligible,
    //   NumberInterview: singleProject.NumberInterview,
    //   ClassificationId: singleProject.ClassificationId,
    //   New: singleProject.New,
    //   SalesExecId: singleProject.SalesExecId,
    //   EnrollmentSystemId: singleProject.EnrollmentSystemId,
    //   VbCarrierId: singleProject.VbCarrierId,
    //   StartDate: singleProject.StartDate,
    //   EndDate: singleProject.EndDate,
    //   EnrollmentMethodId: singleProject.EnrollmentMethodId
    // };
    console.log('ProjectToSave', projectToSave)
    this.projectService.postProject(projectToSave)
      .subscribe(
        data => {this.serviceReturn = <ServiceReturn>data; },
        err => console.log(err),
        // err => this.alertService.danger('CustomerFile Save failed!')
        // () => this.handleSave()
      );
  }
  //
  // handleSave() {
  //   if (this.serviceReturn.Success) {
  //     this.alertService.success('CustomerFile saved successfully!');
  //     this.customerFile = JSON.parse(JSON.stringify(this.serviceReturn.Data));
  //     this.globals.customerGlobal = this.customer;
  //     console.log("customerFile", this.customerFile);
  //   } else {
  //     this.alertService.danger( 'CustomerFile save failed!');
  //     this.messages = JSON.parse(JSON.stringify(this.serviceReturn.Messages));
  //   }
  // }
}
