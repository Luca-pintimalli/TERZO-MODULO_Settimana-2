import { Component } from '@angular/core';
import { NewInterf } from '../../models/new-interf';
import { NewServService } from '../../new-serv.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-smartphone',
  templateUrl: './add-smartphone.component.html',
  styleUrl: './add-smartphone.component.scss'
})
export class AddSmartphoneComponent {
//GESTISCO L'AGGIUNTA DI NUOVI SMARTPHONE 
  newSmartphone:Partial<NewInterf> = {
    disponibilità:true,
  }

  constructor(private smartphoneSvc: NewServService,
    //mi serve per mandare direttamente alla pagina smartphone una volta creata la card 
    private router:Router){}


    create(){
      this.smartphoneSvc.createNewSmartphone(this.newSmartphone).subscribe(()=> {
        this.router.navigate(['/'])
      })
    }

}
