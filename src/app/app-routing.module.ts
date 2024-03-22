import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthorizationPageComponent } from './pages/authorization-page/authorization-page.component';
import { TasksPageComponent } from './pages/tasks-page/tasks-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';

const routes: Routes = [
  { path: '', component: AboutPageComponent, title: 'about' },
  { path: 'login', component: AuthorizationPageComponent, title: 'Login' },
  { path: 'tasks', component: TasksPageComponent, title: 'Tasks' },
  { path: '**', component: AboutPageComponent, redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
