import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Tema } from '../model/Tema';

@Injectable({
  providedIn: 'root'
})
export class TemaService {

  constructor(
    private http: HttpClient) { }

    token = {
      headers: new HttpHeaders().set('Authorization', environment.token)
    }

    getAllTema(): Observable<Tema[]>{
return this.http.get<Tema[]>('https://blogbraba.herokuapp.com/tema/listarTema',this.token)
    }

    postTema(tema: Tema): Observable<Tema>{
      return this.http.post<Tema>('https://blogbraba.herokuapp.com/tema/novoTema',tema, this.token)

    }
}
