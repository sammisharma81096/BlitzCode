import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { TaskComponent } from './task/task.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule }   from '@angular/forms';
import { AddTaskComponent } from './task/add-task/add-task.component';
import { EditTaskComponent } from './task/edit-task/edit-task.component';
import { DeleteTaskComponent } from './task/delete-task/delete-task.component';

const appRoutes: Routes = [
  { path: 'task', component: TaskComponent },
  { path: '', redirectTo: '/task', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    AddTaskComponent,
    EditTaskComponent,
    DeleteTaskComponent
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
