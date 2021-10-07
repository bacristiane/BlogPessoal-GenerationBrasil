import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Postagem } from '../model/Postagem';
import { User } from '../model/User';

@Injectable({
  providedIn: 'root'
})
export class PostagemService {

  constructor(
    private http: HttpClient) { }

    token = {
      headers: new HttpHeaders().set('Authorization', environment.token)
    }
    getAllPostagens(): Observable<Postagem[]>{
      return this.http.get<Postagem[]>('https://blogbraba.herokuapp.com/postagem/listarPostagem', this.token)
    }

    postPostagem(postagem: Postagem): Observable<Postagem>{
      return this.http.post<Postagem>('https://blogbraba.herokuapp.com/postagem/novaPostagem', postagem, this.token)
    }

    getByIdUser(idUsuario: number): Observable<User>{
      return this.http.get<User>(`https://blogbraba.herokuapp.com/usuarios/${idUsuario}`,this.token)
    }
}
