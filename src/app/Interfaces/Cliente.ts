export interface Cliente {
  nombre: String,
  primer_apellido: String,
  segundo_apellido?: String,
  celular: String,
  usuario: String,
  correo: String,
  password: String,
}

export interface inicioSesionResponse {
  message: String,
  ok: boolean, 
  token: string,
  activado? :boolean
}

export interface registroSesionResponse {
  message: String,
  ok: boolean, 
  token: string
}