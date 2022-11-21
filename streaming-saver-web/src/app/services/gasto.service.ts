import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Gasto } from '../interfaces/gasto';

@Injectable({
  providedIn: 'root'
})
export class GastoService {
  url: string = 'http://localhost:3000';

  constructor( private http: HttpClient ) { }

  getGasto(id: number): Observable<Gasto> {
    return this.http.get<Gasto>(`${this.url}/gastos/${id}`);
  }

  getGastos(): Observable<Gasto[]> {
    return  this.http.get<Gasto[]>(`${this.url}/gastos`);
  }

  createGasto(data: Gasto) {
    return this.http.post(`${this.url}/gastos`, data);
  }

  deleteGasto(id: number) {
    return this.http.delete(`${this.url}/gastos/${id}`);
  }

  updateGasto(id: number, data: Gasto) {
    return this.http.put(`${this.url}/gastos/${id}`, data);
  }
}
