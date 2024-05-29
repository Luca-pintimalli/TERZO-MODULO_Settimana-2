import { Component } from '@angular/core';
import { NewInterf } from '../../models/new-interf';
import { NewServService } from '../../new-serv.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-modifica',
  templateUrl: './modifica.component.html',
  styleUrl: './modifica.component.scss'
})
export class ModificaComponent {
  newSmartphone!: NewInterf; 
  constructor( private smartphoneSvc : NewServService,
    private router:Router,
    private route:ActivatedRoute){
   
  }

//serve per far si che l'utente una volta schiacciato il tasto modifica si ritroverà tutte le caratteristiche da modificare già compilate 
  ngOnInit(){
    this.route.params.subscribe((params:any)=> {
      this.smartphoneSvc.getById(params.id).subscribe(smartphone => this.newSmartphone = smartphone)
    })
  }


  edit(){
    this.smartphoneSvc.edit(this.newSmartphone).subscribe(() => {
      this.router.navigate(['/'])
    })

  }




}
