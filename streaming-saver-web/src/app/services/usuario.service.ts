import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Usuario} from "../interfaces/usuario";

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private readonly urlApi = "api/usuario";

  constructor( private http: HttpClient ) { }

  getUserById(id: number): Observable<Usuario> {
    return this.http.get<Usuario>(`${this.urlApi}/${id}`);
  }


  getUser(usuarioLogin: Usuario): Observable<Usuario> {

    const params = {
      email: usuarioLogin.email,
      senha: usuarioLogin.senha
    }

    return this.http.get<Usuario>(`${this.urlApi}`, {params});
  }

  createUser(usuarioLogin: Usuario): Observable<Usuario> {

    const usuarioSalvar = {
      email: usuarioLogin.email,
      senha: usuarioLogin.senha
    }

    return this.http.post<Usuario>(`${this.urlApi}`, usuarioSalvar);
  }
}
