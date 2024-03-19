import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskComponent } from './components/task/task.component';
import { TasksPageComponent } from './components/tasks-page/tasks-page.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    TasksPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  exports: [
    TaskComponent,
    TasksPageComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
