import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { TaskComponent } from './task/task.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule }   from '@angular/forms';
import { AddTaskComponent } from './task/add-task/add-task.component';

const appRoutes: Routes = [
  { path: 'task', component: TaskComponent },
  { path: '', redirectTo: '/task', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    AddTaskComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    )
  ],
  entryComponents: [ AddTaskComponent ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
