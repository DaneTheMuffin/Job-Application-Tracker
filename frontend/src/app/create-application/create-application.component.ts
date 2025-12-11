import { Component } from '@angular/core';
import {ApplicationService, CreateJobApplication, JobApplication} from '../applications.service';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-create-application',
  imports: [
    FormsModule
  ],
  templateUrl: './create-application.component.html',
  styleUrl: './create-application.component.css'
})
export class CreateApplicationComponent {

  protected companyName: string;
  protected positionTitle: string;
  protected timeApplied: string;
  protected applicationStatus: string;


constructor(private applicationService: ApplicationService) {



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

  this.applicationService.addApplication(application).subscribe();


}
}


