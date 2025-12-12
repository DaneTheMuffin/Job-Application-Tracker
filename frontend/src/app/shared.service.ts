import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  showApplications = true;
  topButtonText = 'Add Application';

  constructor() { }



  toggleApplications() {
    this.showApplications = !this.showApplications;
    this.topButtonText = this.showApplications ? 'Add Application' : 'Return';
  }
}
