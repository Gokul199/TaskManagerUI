import { Component, OnInit } from '@angular/core';
import{FormsModule} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import{Task} from 'src/app/Models/task';
import{NgModule} from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import{SharedService} from 'src/app/Services/shared.service';
import{map,filter,scan} from 'rxjs/Operators'
import { DatePipe } from '@angular/common/';

@NgModule({imports:[BrowserModule,FormsModule]})

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers:[DatePipe]
})
export class SearchComponent implements OnInit {
  Tasks:Observable<Task[]>;
  filteredTasks:Task[]; 
  filterTask:string=null;
  filterParentTask:string=null;
  filterPriorityFrom:string=null;
  filterPriorityTo:string=null;
  filterStartDate:string=null;
  filterEndDate:string=null;


  constructor(private sharedservice:SharedService,
    private datePipe:DatePipe) { }

  ngOnInit() {    
  this.gettasks();  
  }

  gettasks()
  {    
    this.Tasks=this.sharedservice.getTasks();
    this.Tasks.subscribe(data=>{this.filteredTasks=data});    
  }

  endTask(TaskID:Number)
  {    
    this.sharedservice.endTask(TaskID).subscribe(()=>{});
    this.reloadData();
  }

  filterByTask()
  {    
    this.filteredTasks=this.filteredTasks.filter(data=>data.Task.startsWith(this.filterTask));
    if(this.filterTask=='' || this.filterTask==null)
    {
      this.reloadData();
    }
  }

  filterByParent()
  {    
    this.filteredTasks=this.filteredTasks.filter(data=>data.ParentTask.startsWith(this.filterParentTask));
    if(this.filterParentTask=='' || this.filterParentTask==null)
    {
      this.reloadData();
    }
  }

  filterByPriorityFrom()
  {
    debugger;
    this.filteredTasks=this.filteredTasks.filter(data=>data.Priority>=parseFloat(this.filterPriorityFrom));
    if(this.filterPriorityFrom==null)
    {
      this.reloadData();
    }
  }
  
  filterByPriorityTo()
  {
    this.filteredTasks=this.filteredTasks.filter(data=>data.Priority<=parseFloat(this.filterPriorityTo));
    if(this.filterPriorityTo==null)
    {
      this.reloadData();
    }
  }

  filterByStartDate()
  {
    this.filteredTasks=this.filteredTasks.filter(data=>this.datePipe.transform(data.StartDate,'yyyy-MM-dd')==this.filterStartDate);
    if(this.filterStartDate==null)
    {
      this.reloadData();
    }
  }

  filterByEndDate()
  {
    this.filteredTasks=this.filteredTasks.filter(data=>this.datePipe.transform(data.EndDate,'yyyy-MM-dd')==this.filterEndDate);
    if(this.filterEndDate=null)
    {
      this.reloadData();
    }
  }
  
  reloadData()
  {  
    debugger;  
    if((this.filterTask==null|| this.filterTask=='')
    &&(this.filterParentTask==null || this.filterParentTask=='')
    &&(this.filterPriorityFrom==null ||this.filterPriorityFrom=='')
    &&(this.filterPriorityTo==null || this.filterPriorityTo=='')
    &&(this.filterStartDate==null || this.filterStartDate=='')
    &&(this.filterEndDate==null || this.filterEndDate==''))
    {
      this.Tasks.subscribe(data=>{this.filteredTasks=data});
    }
  }

}
