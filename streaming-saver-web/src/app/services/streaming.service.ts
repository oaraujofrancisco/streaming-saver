import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Streaming } from '../interfaces/streaming';
import {SerieOuFilme} from "../interfaces/serie-ou-filme";

@Injectable({
  providedIn: 'root'
})
export class StreamingService {

  private readonly urlApi = "api/assinaturas";

  constructor( private http: HttpClient ) { }

  getStreaming(id: number): Observable<Streaming> {
    return this.http.get<Streaming>(`${this.urlApi}/${id}`);
  }

  getStreamings(usuarioId: string): Observable<Streaming[]> {

    const params = {
      'usuario-id': usuarioId
    }

    return this.http.get<Streaming[]>(`${this.urlApi}`, {params});
  }

  createStreaming(data: Streaming) {
    return this.http.post(`${this.urlApi}`, data);
  }

  deleteStreaming(id: number) {
    return this.http.delete(`${this.urlApi}/${id}`);
  }

  updateAssinatura(id: number, data: Streaming) {
    return this.http.put(`${this.urlApi}/${id}`, data);
  }

  updateFilmeOuSerie(id: number, data: SerieOuFilme) {
    return this.http.put(`${this.urlApi}/atualizar-filme-serie/${id}`, data);

  }
}
