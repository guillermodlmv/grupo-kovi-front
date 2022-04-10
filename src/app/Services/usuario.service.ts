import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { registroSesionResponse, Cliente } from '../Interfaces/Cliente';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  constructor(private http: HttpClient) {}
  private baseUrl: string = `${environment.baseUrl}/usuario`;

  registro(cliente: Cliente) {
    const url = `${this.baseUrl}`;
    return this.http.post<registroSesionResponse>(url, cliente).pipe(
      map((resp) => resp),
      catchError((err) => of(err.error))
    );
  }

  enviarCorreoActivacion(correo: String) {
    const url = `${this.baseUrl}/correo/${correo}`;
    return this.http.get<Cliente>(url).pipe(
      map((resp) => resp),
      catchError((err) => of(err.error))
    );
  }

  activarCuenta(token: string) {
    const url = `${this.baseUrl}/activar-cuenta/`;
    return this.http.patch(url, {token}).pipe(
      map((resp) => resp),
      catchError((err) => of(err))
    );
  }

  validarToken(token: string) {
    const url = `${this.baseUrl}/token/${token}`;
    return this.http.get(url).pipe(
      map((resp) => resp),
      catchError((err) => of(err))
    );
  }
}
