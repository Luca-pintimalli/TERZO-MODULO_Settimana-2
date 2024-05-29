import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NewInterf } from './models/new-interf';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewServService {


  //inserisco l'api 
  newUrl:string='http://localhost:3000/smartphone';

  constructor(private http:HttpClient) { }



  getAllSmartphone():Observable<NewInterf[]>{
    return this.http.get<NewInterf[]>(this.newUrl)
  }



  //PER ANDARE A MODIFICARE I VARI SMARTPHONE 
  getById(id:number){
    return this.http.get<NewInterf>(this.newUrl + '/' + id)
  }



  //CFEARE NUOVI SMARTPHONE 
  createNewSmartphone(newSmartphone:Partial<NewInterf>){
    //devo fare una chiamata post 
    return this.http.post<NewInterf>(this.newUrl, newSmartphone )
  }

  //PER ANDARE A MODIFICARE I VARI SMARTPHONE 
  edit(smartphone:NewInterf){
    //faremo una chiamata di aggiornamento , al posto del vecchio oggetto metti l'oggetto che creiamo qui 
    return this.http.put<NewInterf>(this.newUrl + '/' + smartphone.id, smartphone) 
  }
}
