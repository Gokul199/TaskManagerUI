import { Injectable } from '@angular/core';
import{Task} from 'src/app/Models/task'
import{Observable} from 'rxjs/internal/Observable'
import{HttpClientModule} from '@angular/common/http'
import{FormsModule} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import{NgModule} from '@angular/core';

@NgModule({imports:[BrowserModule,FormsModule]})

@Injectable({
  providedIn: 'root'
})
export class SharedTestService {

  constructor() { }

  addTask(task: Task) {
    return null;
  }
 
  getTask(id: number): Observable<Task> {
    const task: Task = { TaskID: 1, Task: 'Task 1', ParentTask: 'Parent Task', Priority: 12, StartDate: new Date('2018-08-12'), EndDate: new Date('2018-08-13')};
    return Observable.create(data => {
      data.next(task);
      data.complete();
    });
  }
 
  getTasks(): Observable<Task[]> {
    const mockTasks: Task[] = [ 
      {TaskID:1,Task:'Task 1',ParentTask:'Parent Task 1',Priority:10,StartDate: new Date('2018-10-11'),EndDate:new Date('2018-10-21')},
      {TaskID:2,Task:'Task 2',ParentTask:'Parent Task 2',Priority:11,StartDate: new Date('2018-11-11'),EndDate:new Date('2018-11-21')}     
      ];
    return Observable.create(data => {
      data.next(mockTasks);
      data.complete();
    });
  }
 
  updateTask(id: number, task: Task) {
    return null;
  }
}