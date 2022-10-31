import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForbiddenComponent } from './pages/forbidden/forbidden.component';
import { GeneratorComponent } from './pages/generator/generator.component';
import { LoginComponent } from './pages/login/login.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { SignupComponent } from './pages/signup/signup.component';
import { RoleGuard } from './shared/guard/role.guard';
import { AuthGuard } from './shared/guards/auth.guard';
import { UnauthGuard } from './shared/guards/unauth.guard';

const routes: Routes = [
  {path: '', redirectTo:'meme', pathMatch:'full'},
  {path: 'meme', component:GeneratorComponent , canActivate: [AuthGuard, RoleGuard], data:{
    roles: 'user'
  }},
  {path: 'login' , component: LoginComponent , canActivate: [UnauthGuard] },
  {path: 'signup', component:SignupComponent, canActivate: [UnauthGuard] },
  {path: 'profile', component: ProfileComponent, canActivate: [AuthGuard, RoleGuard], data:{
    roles: 'admin'
  }},
  { path: 'forbidden', component: ForbiddenComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
