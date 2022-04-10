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

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
})
export class RegistroComponent {
  hide: boolean = true;
  constructor(private fb: FormBuilder) {}
  miValidador = () => {
    return false;
  };

  f: FormGroup = this.fb.group({
    nombre: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z ]{2,254}')]),
    primer_apellido: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z ]{2,254}')]),
    segundo_apellido: new FormControl('', [Validators.pattern('[a-zA-Z ]{2,254}')]),
    celular: new FormControl('', [
      Validators.required,
      Validators.minLength(10),
      Validators.maxLength(10), 
      Validators.pattern('[0-9]{10,10}')
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


  onSubmit = () => {
    console.log(this.f);
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

