import { Component } from '@angular/core';
import {ApplicationService, JobApplication} from '../applications.service';

@Component({
  selector: 'app-view-applications',
  imports: [],
  templateUrl: './view-applications.component.html',
  styleUrl: './view-applications.component.css'
})
export class ViewApplicationsComponent {
public applications?: JobApplication[] = [];

constructor(private applicationService: ApplicationService) {
  this.updateApplication();
}

updateApplication() {
  this.applicationService.getApplications().subscribe((applications: JobApplication[]) => {
    this.applications = applications;
  });
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
