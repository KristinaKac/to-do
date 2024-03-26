import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { TasksPageComponent } from './pages/tasks-page/tasks-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { authGuard } from './guards/auth.guard';
import { RegisterPageComponent } from './pages/register-page/register-page.component';

const routes: Routes = [
  { path: '', component: AboutPageComponent, title: 'about' },
  { path: 'login', component: LoginPageComponent, title: 'Login' },
  { path: 'registration', component: RegisterPageComponent, title: 'Registration' },
  { path: 'tasks', component: TasksPageComponent, title: 'Tasks', canActivate: [authGuard] },
  { path: '**', component: AboutPageComponent, redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
