import {Component, Input} from '@angular/core';
import {ApplicationService, CreateJobApplication, JobApplication} from '../applications.service';
import {FormsModule} from '@angular/forms';
import {SharedService} from '../shared.service';

@Component({
  standalone: true,
  selector: 'app-create-application',
  imports: [
    FormsModule

  ],
  templateUrl: './create-application.component.html',
  styleUrls: ['./create-application.component.css']
})
export class CreateApplicationComponent {

  protected companyName: string;
  protected positionTitle: string;
  protected timeApplied: string;
  protected applicationStatus: string;



constructor(private applicationService: ApplicationService, private sharedService: SharedService) {


  this.companyName = "";
  this.positionTitle = "";
  this.timeApplied = "";
  this.applicationStatus = "";

}

submitApplication(){

  const application: CreateJobApplication = {
    companyName: this.companyName,
    position: this.positionTitle,
    status: this.applicationStatus,
    timeApplied: this.timeApplied
  };
  this.applicationService.addApplication(application).subscribe({
    next: () => {
      this.sharedService.toggleApplications(1);
      this.companyName = '';
      this.positionTitle = '';
      this.timeApplied = '';
      this.applicationStatus = '';
    },
    error: (err) => {
      console.error('Add application failed', err);
    }
  });



}
}


