import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Gasto } from '../interfaces/gasto';

@Injectable({
  providedIn: 'root'
})
export class GastoService {

  private readonly urlApi = "api";

  constructor( private http: HttpClient ) { }

  getGasto(id: number): Observable<Gasto> {

    return this.http.get<Gasto>(`${this.urlApi}/gastos/${id}`);
  }

  getGastos(usuarioId: string): Observable<Gasto[]> {

    const params = {
      'usuario-id': usuarioId
    }

    return this.http.get<Gasto[]>(`${this.urlApi}/gastos`, {params});
  }

  createGasto(data: Gasto) {

    return this.http.post(`${this.urlApi}/gastos`, data);
  }

  deleteGasto(id: number) {
    return this.http.delete(`${this.urlApi}/gastos/${id}`);
  }

  updateGasto(id: number, data: Gasto) {
    return this.http.put(`${this.urlApi}/gastos/${id}`, data);
  }
}
