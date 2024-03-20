import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskComponent } from './components/task/task.component';
import { TasksPageComponent } from './components/tasks-page/tasks-page.component';
import { AddTaskComponent } from './components/add-task/add-task.component';
import { FilterComponent } from './components/filter/filter.component';
import { FilterTasksPipe } from './pipes/filter-tasks.pipe';
import { EditStatusComponent } from './components/edit-status/edit-status.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    TasksPageComponent,
    AddTaskComponent,
    FilterComponent,
    FilterTasksPipe,
    EditStatusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    TaskComponent,
    TasksPageComponent,
    AddTaskComponent,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
