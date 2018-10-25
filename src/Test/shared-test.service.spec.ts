import { TestBed, inject } from '@angular/core/testing';

import { SharedTestService } from './shared-test.service';
import{HttpModule} from '@angular/http'
import{HttpClientModule} from '@angular/common/http'
import{FormsModule} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

describe('SharedTestService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SharedTestService],
      imports:[[BrowserModule,FormsModule],
      HttpModule,
    HttpClientModule]
    });
  });

  it('should be created', inject([SharedTestService], (service: SharedTestService) => {    
    expect(service).toBeTruthy();
  }));
});
