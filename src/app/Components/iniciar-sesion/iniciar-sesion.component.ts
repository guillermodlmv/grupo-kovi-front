import { Component } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.component.html',
  styleUrls: ['./iniciar-sesion.component.css']
})
export class IniciarSesionComponent {

  hide : boolean = true;
  constructor(
    private fb: FormBuilder, 
  ){}

  f : FormGroup= this.fb.group({
    correo : new FormControl('',[ Validators.required, Validators.email] ),
    password : new FormControl('',[ Validators.required, Validators.minLength(6)])
  });

  onSubmit = () => {
    console.log(this.f.value);
  }
}

