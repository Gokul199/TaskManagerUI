import { TestBed, inject, async } from '@angular/core/testing';
import { SharedService } from 'src/app/Services/shared.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Observable } from 'rxjs/internal/Observable';
import { Task } from 'src/app/Models/task';
import { HttpClientModule, HttpRequest, HttpParams, HttpResponse } from '@angular/common/http';
 
 
describe('SharedService', () => {
 
 
  const sampleTasks = [
    { TaskID: 1, Task: 'Task 1', ParentTask: '', Priority: 12, StartDate: new Date('2018-08-12'), EndDate: new Date('2018-08-13'), IsTaskEnded: false },
    { TaskID: 2, Task: 'Task 2', ParentTask: 'Parent Task', Priority: 1, StartDate: new Date('2018-08-12'), EndDate: new Date('2018-08-13'), IsTaskEnded: false }
  ];
 
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        SharedService
      ]
    });
  });  
});

 