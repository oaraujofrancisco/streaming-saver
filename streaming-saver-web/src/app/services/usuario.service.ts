import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Usuario} from "../interfaces/usuario";

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private readonly urlApi = "api";

  isLogado: boolean = false;

  constructor( private http: HttpClient ) { }

  getUser(usuarioLogin: Usuario): Observable<Usuario> {

    const params = {
      email: usuarioLogin.email,
      senha: usuarioLogin.senha
    }

    return this.http.get<Usuario>(`${this.urlApi}/usuario`, {params});
  }

  createUser(usuarioLogin: Usuario): Observable<Usuario> {

    const usuarioSalvar = {
      email: usuarioLogin.email,
      senha: usuarioLogin.senha
    }

    return this.http.post<Usuario>(`${this.urlApi}/usuario`, usuarioSalvar);
  }

  validarUsuarioLogado(isLogado: boolean) {
    this.isLogado = isLogado;

    return this.isLogado;
  }
}
