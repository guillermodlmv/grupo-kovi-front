import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, Observable, of, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import {Cliente, inicioSesionResponse} from '../../Interfaces/Cliente';

@Injectable({
  providedIn: 'root'
})
export class IniciarSesionService {

  private baseUrl :string = environment.baseUrl;
  private _cliente!: Cliente;

  get cliente(){
    return {...this._cliente}
  }
  constructor( private http: HttpClient ) { }


  iniciarSesion(correo: String, password: String) {
    
    const url = `http://localhost:3000/autenticacion/login`
    const body = { correo, password }
    return this.http.post<inicioSesionResponse>(url, body)
      .pipe(
        tap(resp =>{
          if(resp.ok){
            localStorage.setItem('token', resp.token!);
          }
        }),
        map(resp => resp.ok),
        catchError( err => of(err.error.msg))
      )
  }
}
