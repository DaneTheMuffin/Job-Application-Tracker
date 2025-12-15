import { Component, Input, OnChanges, SimpleChanges, OnInit, OnDestroy } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ApplicationService, CreateJobApplication, JobApplication } from '../applications.service';
import { SharedService } from '../shared.service';
import { Subscription } from 'rxjs';

@Component({
  standalone: true,
  selector: 'app-edit-application',
  imports: [FormsModule],
  templateUrl: './edit-application.component.html',
  styleUrls: ['./edit-application.component.css']
})
export class EditApplicationComponent implements OnChanges, OnInit, OnDestroy {
  @Input() application?: JobApplication;

  protected companyName = '';
  protected positionTitle = '';
  protected timeApplied = '';
  protected applicationStatus = '';

  private saveSub?: Subscription;

  constructor(
    private applicationService: ApplicationService,
    private sharedService: SharedService
  ) {}

  ngOnInit() {
    // 🔑 Listen for save requests
    this.saveSub = this.sharedService.saveRequested.subscribe(() => {
      console.log('Save requested → submitting application');
      this.submitApplication();
    });
  }

  ngOnDestroy() {
    this.saveSub?.unsubscribe();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['application'] && this.application) {
      this.companyName = this.application.companyName;
      this.positionTitle = this.application.position;
      this.timeApplied = this.application.timeApplied;
      this.applicationStatus = this.application.status;
    }
  }

  submitApplication() {
    const applicationPayload: CreateJobApplication = {
      companyName: this.companyName,
      position: this.positionTitle,
      status: this.applicationStatus,
      timeApplied: this.timeApplied
    };

    if (this.application?.id != null) {
      // ✅ UPDATE
      this.applicationService
        .updateApplication(this.application.id, applicationPayload)
        .subscribe({
          next: () => {
            this.sharedService.toggleApplications(1);
            this.sharedService.selectedApplication = undefined;
          },
          error: err => console.error('Update failed', err)
        });
    } else {
      // ✅ CREATE
      this.applicationService
        .addApplication(applicationPayload)
        .subscribe({
          next: () => this.sharedService.toggleApplications(1),
          error: err => console.error('Add failed', err)
        });
    }
  }
}
