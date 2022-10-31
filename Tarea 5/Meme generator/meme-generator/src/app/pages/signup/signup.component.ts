import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  signupForm: FormGroup ;
  
  constructor(private formBuilder: FormBuilder) { 
    this.signupForm = this.formBuilder.group({
      name: ['',[Validators.required]],
      email: ['test@gmail.com.mx',[Validators.required, Validators.email]],
      password: ['',[Validators.required, Validators.minLength(6)]],
      confirm: ['',[Validators.required, Validators.minLength(6)]],
      terms: [false,[Validators.required]],
    })
  }

  ngOnInit(): void {
  }

  crearUsuario(){
    const datos = this.signupForm.getRawValue();

    if(this.signupForm.valid){
      console.log('estos son los datos a mostrar', datos)
    }
  }

}
