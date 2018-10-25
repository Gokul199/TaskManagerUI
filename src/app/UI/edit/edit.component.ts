import { Component, OnInit } from '@angular/core';
import{FormsModule} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import{Task} from 'src/app/Models/task';
import{NgModule} from '@angular/core';
import{SharedService} from 'src/app/Services/shared.service';
import { ActivatedRoute,RouterModule } from '@angular/router/';
import { ROUTES } from '@angular/router/src/router_config_loader';
import { Router } from '@angular/router/';


@NgModule({imports:[BrowserModule,FormsModule,]})

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  TaskID:Number;
  Task:String;
  ParentTask:String;
  Priority:Number;
  StartDate:Date;
  EndDate:Date;

  constructor(private sharedservice:SharedService,
    private route:ActivatedRoute,
  private router:Router) { }

  ngOnInit() {    
    this.getTask();
  }

  getTask()
  {    
    const Id=this.route.snapshot.paramMap.get('id');  
    this.sharedservice.getTask(parseInt(this.route.snapshot.paramMap.get('id'))).subscribe(data=>
    {
      this.TaskID=data.TaskID;
      this.Task=data.Task;
      this.ParentTask=data.ParentTask;
      this.StartDate=data.StartDate;
      this.EndDate=data.EndDate;
      this.Priority=data.Priority;
    });
  }

  updateTask()
  {     
    debugger;      
    let taskdata:Task={
      TaskID:this.TaskID,
      Task:this.Task,
      ParentTask:this.ParentTask,
      Priority:this.Priority,
      StartDate:this.StartDate,
      EndDate:this.EndDate

    };
    this.sharedservice.updateTask(this.TaskID,taskdata).subscribe(()=>{});                
    this.router.navigate(['/search']);
  }

  resetFields()
  {
    this.Task=null;
    this.ParentTask=null;
    this.Priority=null;
    this.StartDate=null;
    this.EndDate=null;
  }

}
