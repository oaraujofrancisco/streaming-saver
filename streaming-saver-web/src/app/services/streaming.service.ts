import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Streaming } from '../interfaces/streaming';

@Injectable({
  providedIn: 'root'
})
export class StreamingService {

  private readonly urlApi = "api";

  constructor( private http: HttpClient ) { }

  getStreaming(id: number): Observable<Streaming> {
    return this.http.get<Streaming>(`${this.urlApi}/assinaturas/${id}`);
  }

  getStreamings(usuarioId: string): Observable<Streaming[]> {

    const params = {
      'usuario-id': usuarioId
    }

    return this.http.get<Streaming[]>(`${this.urlApi}/assinaturas`, {params});
  }

  createStreaming(data: Streaming) {

    return this.http.post(`${this.urlApi}/assinaturas`, [data]);
  }

  deleteStreaming(id: number) {
    return this.http.delete(`${this.urlApi}/assinaturas/${id}`);
  }

  updateAssinatura(id: number, data: Streaming) {
    return this.http.put(`${this.urlApi}/assinaturas/${id}`, data);
  }
}
