import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms'; 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './modules/material/material.module';
import { NlToBrPipe } from './shared/pipes/nl-to-br.pipe';
import { SignupComponent } from './pages/signup/signup.component';
import { GeneratorComponent } from './pages/generator/generator.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { LoginComponent } from './pages/login/login.component';
import { ForbiddenComponent } from './pages/forbidden/forbidden.component';



@NgModule({
  declarations: [
    AppComponent,
    NlToBrPipe,
    SignupComponent,
    GeneratorComponent,
    ProfileComponent,
    LoginComponent,
    ForbiddenComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule,
    FormsModule, 
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
