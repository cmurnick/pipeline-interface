import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import {Project} from '../models/project';
import { LeadershipService} from '../services/leadership.service';
import {ProjectService} from '../services/project.service';


@Component({
  selector: 'app-leadership',
  templateUrl: './leadership.component.html',
  styleUrls: ['./leadership.component.css']
})
export class LeadershipComponent implements OnInit {
  projects: Project[];

  constructor(
    private leadershipService: LeadershipService) { }

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
}
