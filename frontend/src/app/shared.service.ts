import { Injectable } from '@angular/core';
import { JobApplication } from './applications.service';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  topButtonText = 'Add Application';

  stateView = 1;

  selectedApplication?: JobApplication;
  saveRequested: Subject<void> = new Subject<void>();

  constructor() {}


  get viewState(): number {
    return this.stateView;
  }

  toggleApplications(toggleNumber: number) {
    switch (toggleNumber) {
      //default view
      case 1:
        this.topButtonText = 'Add Application';
        this.stateView = 1;
        break;
      //add applications
      case 2:
        this.topButtonText = 'Return';
        this.stateView = 2;
        break;
      //edit applications
      case 3:
        this.topButtonText = 'Save Edits';
        this.stateView = 3;
        break;
      default:
        console.error('No correct toggle found, defaulting to 1');
        break;
    }
  }

    requestSave() {
      console.log("requesting save");
      // emit saveRequested so the edit component (which has current form values) can perform save
      this.saveRequested.next();
    }
}
