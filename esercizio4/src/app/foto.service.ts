import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FotoInt } from './models/foto-int';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FotoService {
  apiUrl:string="https://jsonplaceholder.typicode.com/photos"

  constructor(private http:HttpClient) { }

  getAllFoto():Observable<FotoInt[]>{
    return this.http.get<FotoInt[]>(this.apiUrl)
  }

  delete(id:number):Observable<FotoInt>{
    return this.http.delete<FotoInt>(`${this.apiUrl}/${id}`)
  }
}
