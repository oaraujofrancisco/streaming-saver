import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ApiExternaService {

  constructor(
    private http: HttpClient
  ) { }

  getFilme(titulo: string, tipo: string) {
    const params = {
      title: titulo,
      country: 'br',
      type: tipo,
      output_language: 'en'
    }

    const headers = {
      'X-RapidAPI-Key': 'ced78b36a7msh6dbbfb9a6d5aba7p142087jsn57ea39767aa4',
      'X-RapidAPI-Host': 'streaming-availability.p.rapidapi.com'
    }

    return this.http.get('https://streaming-availability.p.rapidapi.com/v2/search/title',
      {headers, params});
  }
}
