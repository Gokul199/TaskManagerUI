import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { AddComponent } from './UI/add/add.component';
import { EditComponent } from './UI/edit/edit.component';
import { SearchComponent } from './UI/search/search.component';
import{Routes,RouterModule} from '@angular/router'
import { ROUTES } from '@angular/router/src/router_config_loader';
import { HttpClientModule } from '@angular/common/http';

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

@NgModule({
  declarations: [
    AppComponent,
    AddComponent,
    EditComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    [BrowserModule,FormsModule],
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

