import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { AuthService } from 'src/app/Services/auth.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { UsuarioService } from 'src/app/Services/usuario.service';

@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.component.html',
  styleUrls: ['./iniciar-sesion.component.css'],
})
export class IniciarSesionComponent {
  hide: boolean = true;
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private usuarioService: UsuarioService,
    private router: Router
  ) {}

  f: FormGroup = this.fb.group({
    correo: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
  });

  onLogin = () => {
    const { correo, password } = this.f.value;
    this.authService.iniciarSesion(correo, password).subscribe((e) => {
      if (e.ok) {
        this.router.navigateByUrl('/home');
        return;
      } else if (e.error.message === 'Usuario no activado') {
        Swal.fire({
          icon: 'info',
          title: e.error.message,
          text: '¿Deseas que te reenviemos el correo de activacion?',
          showCancelButton: true,
          confirmButtonColor: '#015d86',
          cancelButtonColor: '#d33',
          cancelButtonText: 'No',
          confirmButtonText: 'Reenviame el correo de activacion!',
        }).then((result) => {
          if (result.isConfirmed) {
            this.usuarioService
              .enviarCorreoActivacion(correo)
              .subscribe((e) => {
                Swal.fire('Enviado!', e.message, 'success');
              });
          }
        });
        return;
      }
      Swal.fire({
        icon: 'error',
        title: e.error.message,
      });
    });
  };
}
