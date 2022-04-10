import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Cliente } from 'src/app/Interfaces/Cliente';
import { UsuarioService } from 'src/app/Services/usuario.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-activar-cuenta',
  templateUrl: './activar-cuenta.component.html',
  styleUrls: ['./activar-cuenta.component.css']
})
export class ActivarCuentaComponent implements OnInit {
  token : string = '';
  cliente : Cliente = { 
    nombre: '',
    primer_apellido: '',
    segundo_apellido: '',
    celular: '',
    usuario: '',
    correo: '',
    password: '',
  };
  
  constructor( 
    private route: ActivatedRoute,
    private usuarioService: UsuarioService ,
    private router : Router 
  ) { }
  
  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.token = params.get('token') || '';
    });
    this.usuarioService.validarToken(this.token).subscribe(e => {
      if(e.usuario){
        this.cliente.primer_apellido = e.usuario.primer_apellido || " "
        this.cliente.nombre = e.usuario.nombre || " "
      }
      
    })
  }
  activarCuenta(): void {
    this.usuarioService.activarCuenta(this.token)
    .subscribe(e=> {
      if(e.validacion){
          this.router.navigateByUrl('/auth/iniciar-sesion');
          Swal.fire("Cuenta Activada","Por favor inicia sesion", 'success');
          
      }else{
        Swal.fire("Token invalido", '' ,'error');
      }
    })
  }
}
