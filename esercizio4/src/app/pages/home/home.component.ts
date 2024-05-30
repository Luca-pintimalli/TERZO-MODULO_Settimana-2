import { Component } from '@angular/core';
import { FotoService } from '../../foto.service';
import { FotoInt } from '../../models/foto-int';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  foto:FotoInt[] = []

  constructor(private fotoSvc:FotoService){}



  ngOnInit(){
    this.fotoSvc.getAllFoto().subscribe(foto => {
      this.foto= foto.slice(0,10)
    })
    
  }

}
