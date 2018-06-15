import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import {Project} from '../models/project';
import { LeadershipService} from '../services/leadership.service';
import {ProjectService} from '../services/project.service';
import { Product} from '../models/product';
import {ProductProject} from '../models/product-project';
import {Classification} from '../models/classification';
import {ProductProjectService} from '../services/product-project.service';

@Component({
  selector: 'app-leadership',
  templateUrl: './leadership.component.html',
  styleUrls: ['./leadership.component.css']
})
export class LeadershipComponent implements OnInit {
  projects: Project[];
  productProjects: ProductProject[];

  constructor(
    private leadershipService: LeadershipService,
    private productProjectService: ProductProjectService) { }

  ngOnInit() {

  }


  get() {
    this.leadershipService.get().subscribe(
      data => {
        this.projects = data as Project[];
        console.log('sales data', this.projects);
      },
      err => console.error(err),
      () => console.log('projects Loaded')
    );
  }

  postProductProjects() {
    this.productProjectService.postProductProjects().subscribe(
      data => {
        this.productProjects = data as ProductProject[];
      },
      err => console.log(err)
    );
  }
 }
