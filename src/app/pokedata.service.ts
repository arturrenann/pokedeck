import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokedataService {

  constructor(
    private http: HttpClient
  ) { }

  //getpokemons
  getPokemons(): Observable<any[]> {
    return this.http.get<any[]>(`https://pokeapi.co/api/v2/pokemon`)
  }

  getMorePokemons(name: any) {
    return this.http.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
  }
}
