import { Component } from '@angular/core';
import {CommonModule} from '@angular/common';
import {ApplicationService} from './applications.service';
import {CreateApplicationComponent} from './create-application/create-application.component';
import {ViewApplicationsComponent} from './view-applications/view-applications.component';
import {SharedService} from './shared.service';
import { EditApplicationComponent } from './edit-application/edit-application.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  imports: [CommonModule, CreateApplicationComponent, ViewApplicationsComponent, EditApplicationComponent]
})

export class AppComponent {


  buttonState = 1;

  

  constructor(public sharedService: SharedService) {

  }

  get topButtonText(): string {
    return this.sharedService.topButtonText;
  }

  getViewState(): number{
   return this.sharedService.viewState;
  }
  toggleApplications(toggleNumber?: number) {
    if (typeof toggleNumber === 'number') {
      this.sharedService.toggleApplications(toggleNumber);
      return;
    }

    const vs = this.sharedService.viewState;

    if (vs === 1) {
      this.sharedService.toggleApplications(2);
    } else {
      this.sharedService.toggleApplications(1);
    }
  }

  handleTopButton() {
    const vs = this.sharedService.viewState;
    if (vs === 3) {
      this.sharedService.requestSave();
      return;
    }

    this.toggleApplications();
  }


}

