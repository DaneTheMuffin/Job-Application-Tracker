import { TestBed } from '@angular/core/testing';
import {ApplicationService} from './applications.service';



describe('WeatherService', () => {
  let service: ApplicationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApplicationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
