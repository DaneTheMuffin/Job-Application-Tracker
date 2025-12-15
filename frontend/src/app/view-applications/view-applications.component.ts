import { Component } from '@angular/core';
import {ApplicationService, JobApplication} from '../applications.service';
import { SharedService } from '../shared.service';


@Component({
  standalone: true,
  selector: 'app-view-applications',
  imports: [],
  templateUrl: './view-applications.component.html',
  styleUrls: ['./view-applications.component.css']
})
export class ViewApplicationsComponent {
public applications?: JobApplication[] = [];

constructor(private applicationService: ApplicationService, private sharedService: SharedService) {
  this.updateApplication();
}

updateApplication() {
  this.applicationService.getApplications().subscribe((applications: JobApplication[]) => {
    this.applications = applications;
  });
}

editApplication(application: JobApplication) {
  this.sharedService.selectedApplication = application;
  this.sharedService.toggleApplications(3);
}

deleteApplication(id: number) {
  this.applicationService.deleteApplication(id).subscribe({
    next: () => {
      this.updateApplication();
    },
    error: (err) => {
      console.error('Delete failed', err);
    }
  });

}

}
