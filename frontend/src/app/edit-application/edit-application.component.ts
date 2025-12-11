import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {ApplicationService, CreateJobApplication} from '../applications.service';

@Component({
  selector: 'app-edit-application',
  imports: [
    FormsModule
  ],
  templateUrl: './edit-application.component.html',
  styleUrl: './edit-application.component.css'
})
export class EditApplicationComponent {
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
