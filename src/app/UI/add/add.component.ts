import { Component, OnInit } from '@angular/core';
import{Task} from 'src/app/Models/task';
import{NgModule} from '@angular/core';
import{FormsModule} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import{SharedService} from 'src/app/Services/shared.service';

@NgModule({imports:[BrowserModule,FormsModule]})

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  Priority:Number;
  Task:String;
  ParentTask:String;
  StartDate:Date;
  EndDate:Date;

  constructor(private sharedservice:SharedService) {}

  ngOnInit() {
  }

  AddTask()
  {    
    let taskdata:Task={
      TaskID:0,
      Task:this.Task,
      ParentTask:this.ParentTask,
      Priority:this.Priority,
      StartDate:this.StartDate,
      EndDate:this.EndDate

    };
    this.sharedservice.addTask(taskdata).subscribe(()=>{});
    this.ResetFields();
  }

  ResetFields()
  {
    this.Task="";
    this.ParentTask=null;
    this.Priority=null;
    this.StartDate=null;
    this.EndDate=null;
  }


}
