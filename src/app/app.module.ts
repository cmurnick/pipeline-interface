import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { GlobalChildComponent } from './global-child/global-child.component';
// import { Globals } from './globals';
import { AppRoutingModule } from './/app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AlertModule} from 'ngx-alerts';
import { AppComponent } from './app.component';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectService} from './services/project.service';

@NgModule({
  declarations: [
    AppComponent,
    ProjectsComponent,
    // GlobalsChildComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AlertModule.forRoot({maxMessages: 5, timeout: 5000})
  ],
  providers: [
    ProjectService
    // CustomerService,
    // CustomerFileService,
    // CustomerFieldService,
    // BCITableService,
    // BCIFieldService,
    // Globals
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
