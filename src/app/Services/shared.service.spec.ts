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
 
  it('should be created', inject([SharedService], (service: SharedService) => {
    expect(service).toBeTruthy();
  }));
 
  it('get all tasks', async(inject([SharedService, HttpTestingController], (service: SharedService, backEnd: HttpTestingController) => {
    service.getTasks().subscribe(actual => {
      var expected = [
        { TaskID: 1, Task: 'Task 1', ParentTask: '', Priority: 12, StartDate: new Date('2018-08-12'), EndDate: new Date('2018-08-13') },
        { TaskID: 2, Task: 'Task 2', ParentTask: 'Parent Task', Priority: 1, StartDate: new Date('2018-08-12'), EndDate: new Date('2018-08-13') }
      ];
      expect(actual).toEqual(expected);
    });
 
    backEnd.expectOne({
      url: 'http://localhost:51812/api/task',
      method: 'GET'
    }).flush(sampleTasks);
 
  })));
 
  
 
 
  it('add a task', async(inject([SharedService, HttpTestingController], (service: SharedService, backEnd: HttpTestingController) => {
 
    let taskData: Task = {
      TaskID: 8,
      Task: 'Sample Task',
      ParentTask: 'Sample Parent',
      Priority: 8,
      StartDate: new Date(),
      EndDate: new Date()      
    };
 
    service.addTask(taskData).subscribe((data: any) => {
      expect(data.success).toBe(true);
      /**expect(data.message).toBe('task added successfully');**/
    },
      (error: any) => { });
 
    backEnd.expectOne({
      url: 'http://localhost:51812/api/task/AddTask',
      method: 'POST'
    })
      .flush({
        success: true,
        message: 'task addedd sucessfully'
      });
 
  })));
 
  it('update a task', async(inject([SharedService, HttpTestingController], (service: SharedService, backEnd: HttpTestingController) => {
 
    const taskData: Task = {
     TaskID: 8,
      Task: 'Sample Task',
      ParentTask: 'Sample Parent',
      Priority: 8,
      StartDate: new Date('2017-11-12'),
      EndDate: new Date('2017-12-01')      
    };
 
    service.updateTask(taskData.TaskID, taskData).subscribe(data => {
      expect(data.success).toBe(true);
      expect(data.message).toBe('task udated successfully');
    },
      (error: any) => { });
 
    backEnd.expectOne('http://localhost:51812/api/task/8')
      .flush({
        success: true,
        message: 'task udated successfully'
      });
 
  })));
 
  it('end a task', async(inject([SharedService, HttpTestingController], (service: SharedService, backEnd: HttpTestingController) => {
 
    service.endTask(1).subscribe(data => {
      expect(data.success).toBe(true);
      expect(data.message).toBe('end task was successful');
    },
      (error: any) => { });
 
    backEnd.expectOne({
      url: 'http://localhost:63887/api/task/1',
      method: 'PUT'
    })
      .flush({
        success: true,
        message: 'end task was successful'
      });
 
  })));
 
  it('should be OK returning no tasks', async(inject([SharedService, HttpTestingController], (service: SharedService, backEnd: HttpTestingController) => {
 
    service.getTasks().subscribe(
      tasks => expect(tasks.length).toEqual(0, 'should have empty tasks array'),
      fail
    );
 
    backEnd.expectOne(service.tasksUrl)
      .flush([]); // Respond with no tasks
  })));
 
  it('should return expected tasks (called multiple times)', async(inject([SharedService, HttpTestingController], (service: SharedService, backEnd: HttpTestingController) => {
 
    service.getTasks().subscribe();
    service.getTasks().subscribe();
    service.getTasks().subscribe(
      heroes => expect(heroes).toEqual(sampleTasks, 'should return expected tasks'),
      fail
    );
 
    const requests = backEnd.match(service.tasksUrl);
    expect(requests.length).toEqual(3, 'calls to getTasks()');
 
    // Respond to each request with different mock hero results
    requests[0].flush([]);
    requests[1].flush([{ TaskId: 1, TaskInfo: 'Task 1', ParentTask: 'Parent Task', Priority: 12, StartDate: new Date('2018-08-12'), EndDate: new Date('2018-08-13'), IsTaskEnded: false }]);
    requests[2].flush(sampleTasks);
 
  })));

});

 