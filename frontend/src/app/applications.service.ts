import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ApplicationService {
  constructor(private http: HttpClient) {}
  getApplications(): Observable<JobApplication[]> {
    return this.http.get<JobApplication[]>('http://localhost:5271/applications');
  }

  addApplication(application: CreateJobApplication): Observable<CreateJobApplication> {
  return this.http.post<CreateJobApplication>('http://localhost:5271/applications', application)
   }
}


export interface JobApplication {
  id: number;
  companyName: string;
  position: string;
  status: string;
  timeApplied: string;
}


export interface CreateJobApplication {
  companyName: string;
  position: string;
  status: string;
  timeApplied: string;
}
