import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

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
      'X-RapidAPI-Key': 'ea6081d327msh6730ce19b6a0e9cp1a4318jsnf0064826976f',
      'X-RapidAPI-Host': 'streaming-availability.p.rapidapi.com'
    }

    return this.http.get('https://streaming-availability.p.rapidapi.com/v2/search/title',
      {headers, params});
  }
}
