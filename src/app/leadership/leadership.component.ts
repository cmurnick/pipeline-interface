import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import {Project} from '../models/project';
import { LeadershipService} from '../services/leadership.service';
import {ProjectService} from '../services/project.service';
import { Product} from '../models/product';
import {Classification} from '../models/classification';
import {LookupsService} from '../services/lookups.service';
import {ProductProjectService} from '../services/product-project.service';

@Component({
  selector: 'app-leadership',
  templateUrl: './leadership.component.html',
  styleUrls: ['./leadership.component.css']
})
export class LeadershipComponent implements OnInit {
  projects: Project[];
  // productProjects: ProductProject[];
  custAllProducts: Product[];

  constructor(
    private leadershipService: LeadershipService,
    private productProjectService: ProductProjectService) { }
    private lookupsService: LookupsService

  ngOnInit() {
    this.get();
  }


  get() {
    this.leadershipService.get().subscribe(
      data => {
        this.projects = data as Project[];
        console.log('sales data', this.projects);
      },
      err => console.error(err),
      // () => this.getAllForProject()
    );
  }

  getAllForProject(projectId: number) {
    this.lookupsService.getAllForProject(projectId).subscribe(
      data => {
        this.custAllProducts = data as Product[];
      },
      err => console.log(err)
    );
  }

  // postProductProjects(projectId: number, products: Product[]) {
  //   this.lookupsService.postProductProjects(projectId, products).subscribe(
  //     data => {
  //       this.productProjects = data as ProductProject[];
  //     },
  //     err => console.log(err)
  //   );
  // }
 }
