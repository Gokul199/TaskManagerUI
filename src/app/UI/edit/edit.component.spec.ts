import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditComponent } from './edit.component';
import { FormsModule } from '@angular/forms';
import{By} from '@angular/platform-browser'
import{BrowserModule} from '@angular/platform-browser'
import{HttpModule} from '@angular/http'
import{HttpClientModule} from '@angular/common/http'
import { ActivatedRoute,RouterModule } from '@angular/router/';
import { ROUTES } from '@angular/router/src/router_config_loader';
import { Router } from '@angular/router/';


describe('EditComponent', () => {
  let component: EditComponent;
  let fixture: ComponentFixture<EditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditComponent],
      imports:[[BrowserModule,FormsModule], 
      HttpModule,
      HttpClientModule,
    RouterModule,
  ActivatedRoute]
    })
    .compileComponents().then(()=>{
      fixture = TestBed.createComponent(EditComponent);
      component = fixture.componentInstance;
    });
  })); 

  it('should get the task', () => {
    expect(component).toBeTruthy();
  });
 
  it('should reset the UI fields', () => {
    component.Task = "Task 1";
    component.StartDate =new Date("2017-11-12");
    component.resetFields();
    expect(component.Task).toEqual('');
    expect(component.StartDate).toBeNull();
  });
 
  it('should update the task',() => {    
  }); 
});
