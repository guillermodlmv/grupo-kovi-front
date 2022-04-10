import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, Observable, of, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import {Cliente, inicioSesionResponse} from '../Interfaces/Cliente';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl :string = `${environment.baseUrl}/autenticacion`;
  private _cliente!: Cliente;

  get cliente(){
    return {...this._cliente}
  }
  constructor( private http: HttpClient ) { }


  iniciarSesion(correo: String, password: String) {
    const url = `${this.baseUrl}/login`
    const body = { correo, password }
    return this.http.post<inicioSesionResponse>(url, body)
      .pipe(
        tap(resp =>{
          if(resp.ok){
            localStorage.setItem('token', resp.token!);
          }
        }),
        map(resp =>  resp),
        catchError( err => of(err))
      )
  }

}
