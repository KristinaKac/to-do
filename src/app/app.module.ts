import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskComponent } from './components/task/task.component';
import { TasksPageComponent } from './pages/tasks-page/tasks-page.component';
import { AddTaskComponent } from './components/add-task/add-task.component';
import { FilterComponent } from './components/filter/filter.component';
import { FilterTasksPipe } from './pipes/filter-tasks.pipe';
import { EditStatusComponent } from './components/edit-status/edit-status.component';
import { AuthorizationPageComponent } from './pages/authorization-page/authorization-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { HeaderComponent } from './components/header/header.component';
import { AuthFormComponent } from './components/auth-form/auth-form.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { authInterceptor } from './interceptor/auth.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    TasksPageComponent,
    AddTaskComponent,
    FilterComponent,
    FilterTasksPipe,
    EditStatusComponent,
    AuthorizationPageComponent,
    AboutPageComponent,
    HeaderComponent,
    AuthFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    HttpClientModule
  ],
  exports: [
    TaskComponent,
    TasksPageComponent,
    AddTaskComponent,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: authInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
