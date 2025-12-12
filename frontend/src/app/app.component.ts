import { Component } from '@angular/core';
import {CommonModule} from '@angular/common';
import {ApplicationService} from './applications.service';
import {CreateApplicationComponent} from './create-application/create-application.component';
import {ViewApplicationsComponent} from './view-applications/view-applications.component';
import {SharedService} from './shared.service';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  imports: [CommonModule, CreateApplicationComponent, ViewApplicationsComponent]
})

export class AppComponent {




  constructor(private sharedService: SharedService) {

  }

  get showViewApplications(): boolean {
    return this.sharedService.showApplications;
  }

  get topButtonText(): string {
    return this.sharedService.topButtonText;
  }

  toggleApplications() {
    this.sharedService.toggleApplications();

  }


}

