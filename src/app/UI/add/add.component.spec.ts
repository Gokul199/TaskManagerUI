import { async, ComponentFixture, TestBed, inject, fakeAsync } from '@angular/core/testing';
import { Task } from 'src/app/Models/task';
import { AddComponent } from './add.component';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { SharedTestService } from 'src/test/shared-test.service';
import{BrowserModule} from '@angular/platform-browser';
import{HttpModule} from '@angular/http'
import{HttpClientModule} from '@angular/common/http'
import { RouterModule,Router,Routes } from '@angular/router/';


describe('AddComponent', () => {
  let component: AddComponent;
  let fixture: ComponentFixture<AddComponent>;
 
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AddComponent
      ],
      providers: [        
        { provide: SharedTestService, useClass: SharedTestService }
      ],    
      imports:[[BrowserModule,FormsModule], 
      HttpModule,
      HttpClientModule,
    RouterModule]
    })
      .compileComponents().then(()=>{
        fixture = TestBed.createComponent(AddComponent);
        component = fixture.componentInstance;
      });
  }));   
 
  it('should create', () => {    
    expect(component).toBeTruthy();
  });

 
  it('should reset the UI fields',() => {
    component.Task = "Task 1";    
    component.ResetFields();
    expect(component.Task).toEqual('');
    expect(component.StartDate).toBeNull();
  });
 
  it('should add a new task',() => {    
                 
  });  
});

 