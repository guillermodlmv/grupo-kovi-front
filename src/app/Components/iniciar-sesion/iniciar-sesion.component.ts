import { Component } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { IniciarSesionService } from 'src/app/Services/iniciar-sesion/iniciar-sesion.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.component.html',
  styleUrls: ['./iniciar-sesion.component.css']
})
export class IniciarSesionComponent {

  hide : boolean = true;
  constructor(
    private fb: FormBuilder,
    private iniciarSesionService: IniciarSesionService,
    private router: Router, 
  ){}

  f : FormGroup= this.fb.group({
    correo : new FormControl('',[ Validators.required, Validators.email] ),
    password : new FormControl('',[ Validators.required, Validators.minLength(6)])
  });

  onSubmit = () => {
    const {correo , password } = this.f.value;
    // console.log(this.f.value);
    this.iniciarSesionService.iniciarSesion(correo , password )
      .subscribe(ok =>{
        if(ok) {
          this.router.navigateByUrl('/home');
          return
        }
        Swal.fire({
          icon: 'error',
          title: "Error",
          text: 'Favor de verificar correo o contraseña',
        })
      })
  }
}

