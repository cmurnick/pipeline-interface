import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProjectsComponent} from './projects/projects.component';
import {LeadershipComponent} from './leadership/leadership.component';

const routes: Routes = [
  { path: '', redirectTo: 'projects/', pathMatch: 'full' },
  { path: 'projects', component: ProjectsComponent},
  { path: 'projects/leadership', component: LeadershipComponent},
  // { path: 'customers/details/customerFiles', component: CustomerFileSelectComponent},
  // { path: 'customers/details/customerFiles/:customerFileId', component: CustomerFileEditComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [ RouterModule]
})
export class AppRoutingModule { }
