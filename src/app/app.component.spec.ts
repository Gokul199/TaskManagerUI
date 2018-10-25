import { TestBed, async,fakeAsync,tick } from '@angular/core/testing';
import { APP_BASE_HREF } from '@angular/common';

import { AppComponent } from './app.component';
import { RouterModule,Router,Routes } from '@angular/router/';
import { AddComponent } from './UI/add/add.component';
import { EditComponent } from './UI/edit/edit.component';
import { SearchComponent } from './UI/search/search.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { Location } from '@angular/common';
import{RouterTestingModule} from '@angular/router/testing'
import{HttpModule} from '@angular/http'
import{HttpClientModule} from '@angular/common/http'


const routes:Routes=[
  {path:'add',
  component:AddComponent
},
{path:'edit/:id',
  component:EditComponent
},
{path:'search',
  component:SearchComponent
}
];

describe('AppComponent', () => {

  let location:Location;
  let router=Router;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        AddComponent,
        EditComponent,
        SearchComponent
      ],
      providers:[{provide:APP_BASE_HREF,useValue:'/'}],
      imports:[[BrowserModule,FormsModule],
      RouterModule.forRoot(routes)],
    }).compileComponents();      
  }));

  it('should create the app', async(() => {    
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'TaskManagerUI'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('TaskManagerUI');
  }));

  it('navigate to "" redirects you to /Add',fakeAsync(()=>{
    this.router.navigate(['/add']);
    tick(50);
    expect(location.path()).toBe('/add');
  }));

  it('navigate to "" redirects you to /View',fakeAsync(()=>{
    this.router.navigate(['/search']);
    tick(50);
    expect(location.path()).toBe('/search');
  }));

});
