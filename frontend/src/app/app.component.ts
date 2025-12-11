import { Component } from '@angular/core';
import {CommonModule} from '@angular/common';
import {ApplicationService} from './applications.service';
import {CreateApplicationComponent} from './create-application/create-application.component';
import {ViewApplicationsComponent} from './view-applications/view-applications.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  imports: [CommonModule, CreateApplicationComponent, ViewApplicationsComponent]
})

export class AppComponent {

  showApplications = true;


  constructor(private applicationService: ApplicationService) {



  }

  toggleApplications() {
    this.showApplications = !this.showApplications;
  }


}

