import { Component } from '@angular/core';
import { NewServService } from '../../new-serv.service';
import { NewInterf } from '../../models/new-interf';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrl: './page2.component.scss'
})
export class Page2Component {

  smartphone : NewInterf[] = []

  constructor(private smartphoneSvc: NewServService){}

  ngOnInit(){
    //così possiamo vedere nella pagina già i dati smartphone 
    this.smartphoneSvc.getAllSmartphone().subscribe( 
      smartphone => {this.smartphone = smartphone})
  }

  //GESTISTO L'OPZIONE DELETE DEL BOTTONE PER ELIMINARE LE CARD SMARTPHONE 
  deleteSmartphone(id:number){
    this.smartphoneSvc.delete(id).subscribe(smartphone => {
    alert('smartphone eliminata')
    })
  }

}
