import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormGroupDirective,
  NgForm,
  Validators,
} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/Services/usuario.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
})

export class RegistroComponent {
  hideFirsPassword: boolean = true;
  hideSecondPassword: boolean = true;
  constructor(
    private fb: FormBuilder,
    private usuarioService: UsuarioService,
    private router: Router
    ) {}

  f: FormGroup = this.fb.group({
    nombre: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z ]{2,254}')]),
    primer_apellido: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z ]{2,254}')]),
    segundo_apellido: new FormControl('', [Validators.pattern('[a-zA-Z ]{2,254}')]),
    celular: new FormControl('', [
      Validators.required,
      Validators.pattern('[0-9]{10,10}')
    ]),
    usuario: new FormControl('', [
      Validators.required,
    ]),
    correo: new FormControl('', [
      Validators.required, Validators.email, 
      Validators.pattern('[A-Za-z0-9._%-]+@[A-Za-z0-9._%-]+\\.[a-z]{2,3}')
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
      Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{6,}'),
      Validators.pattern('(?=.*[A-Z]).{6,}')
    ]),
    repeatPassword : new FormControl('', [
      Validators.required,
      Validators.minLength(6)
    ]),
  },
  {
    validator: ConfirmedValidator('password', 'repeatPassword')
  }
  );

  info(){
    const wrapper = document.createElement('div');
    wrapper.innerHTML = "<ul style='font-size: 12px'><li>Contraseña debe contener al menos una minuscula.</li><li>Contraseña debe contener al menos una mayuscula.</li><li>Contraseña debe contener al menos un número.</li><li>Contraseña debe contener al menos uno de los siguientes caracteres $@$!%*?&.</li></ul>";
    Swal.fire({
      icon: 'info',
      title: "Requisitos de contraseña",
      html: wrapper
    })
  }
  onSubmit = () => {
    const {nombre, primer_apellido, segundo_apellido, celular, usuario, correo, password} = this.f.value;
    const usuarioNuevo = {nombre, primer_apellido, segundo_apellido, celular, usuario, correo, password}
    this.usuarioService.registro(usuarioNuevo)
      .subscribe(e => {
        console.log(e);
        if(e.ok) {
          Swal.fire({
            icon: 'success',
            title: "Usuario Creado",
            text: "Se ha enviado un mensaje de activacion a su correo, active su cuenta para poder disfrutar los beneficios de ser nuestro cliente."
          })
          this.router.navigateByUrl('/auth/iniciar-sesion');
          return
        }else{
          Swal.fire({
            icon: 'error',
            title: `${e.message}`,
          })
        }
      })
  };
}

export function ConfirmedValidator(controlName: string, matchingControlName: string){
    return (f: FormGroup) => {
        const control = f.controls[controlName];
        const matchingControl = f.controls[matchingControlName];
        if (matchingControl.errors && !matchingControl.errors.confirmedValidator) {
            return;
        }
        if (control.value !== matchingControl.value) {
            matchingControl.setErrors({ confirmedValidator: true });
        } else {
            matchingControl.setErrors(null);
        }
    }
}

