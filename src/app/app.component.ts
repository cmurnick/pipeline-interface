import { Component } from '@angular/core';
import { AlertService } from 'ngx-alerts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BCI Sales Pipeline';
  constructor(private alertService: AlertService) {}

  showAlerts(): void {
    this.alertService.info('this is an info alert');
    this.alertService.danger('this is a danger alert');
    this.alertService.success('Success!');
    this.alertService.warning('this is a warning alert');
  }
}
