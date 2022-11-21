import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "../interfaces/User";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private readonly urlApi = "api";

  constructor( private http: HttpClient ) { }

  getUser(usuarioLogin: User): Observable<User> {

    const params = {
      email: usuarioLogin.email,
      senha: usuarioLogin.password
    }

    return this.http.get<User>(`${this.urlApi}/usuario`, {params});
  }

  createUser(usuarioLogin: User): Observable<User> {

    const usuarioSalvar = {
      email: usuarioLogin.email,
      senha: usuarioLogin.password
    }


    return this.http.post<User>(`${this.urlApi}/usuario`, usuarioSalvar);
  }
}
