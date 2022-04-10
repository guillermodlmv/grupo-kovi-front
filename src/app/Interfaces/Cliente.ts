export interface Cliente {
  nombre: String,
  primer_apellidade: String,
  segundo_apellido: String,
  celular: String,
  correo: String,
  password: String,
}
export interface inicioSesionResponse {
  message: String,
  ok: boolean, 
  token: string
}

