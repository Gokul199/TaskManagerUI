import { async, ComponentFixture, TestBed,inject,fakeAsync } from '@angular/core/testing';
import { SearchComponent } from './search.component';
import { FormsModule } from '@angular/forms';
import{By} from '@angular/platform-browser'
import{BrowserModule} from '@angular/platform-browser'
import{HttpModule} from '@angular/http'
import{HttpClientModule} from '@angular/common/http'
import { RouterModule,Router,Routes } from '@angular/router/';
import { SharedTestService } from 'src/test/shared-test.service';

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchComponent ],
      imports:[[BrowserModule,FormsModule],
      HttpModule,
      HttpClientModule,
    RouterModule,
  SharedTestService] 
    })
    .compileComponents().then(()=>{
      fixture = TestBed.createComponent(SearchComponent);
      component = fixture.componentInstance;
    });
  }));

 it('should get all tasks',()=>{
  expect(component).toBeTruthy();
  expect(component.filteredTasks.length).toBeGreaterThanOrEqual(0); 
 });

 it('should filter based on task name', () => {    
  fixture.whenStable().then(() => {
    let taskName = fixture.debugElement.query(By.css('#Task'));
    taskName.nativeElement.value = 'Task 1';
    taskName.nativeElement.dispatchEvent(new Event('input'));
    taskName.nativeElement.dispatchEvent(new Event('blur'));            
    expect(component.filteredTasks.length).toBe(1);
  });
});

  it('should reload when filters are cleared', () => {    
    fixture.whenStable().then(() => {
      let taskName = fixture.debugElement.query(By.css('#Task'));
      taskName.nativeElement.value = 'Task 1';
      taskName.nativeElement.dispatchEvent(new Event('input'));
      taskName.nativeElement.dispatchEvent(new Event('blur'));            
      taskName.nativeElement.value = '';
      taskName.nativeElement.dispatchEvent(new Event('input'));
      taskName.nativeElement.dispatchEvent(new Event('blur'));            
      expect(component.filteredTasks.length).toBe(2);
    });
  });
});
