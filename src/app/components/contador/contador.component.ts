import { Component, OnInit } from '@angular/core';
import { EventosService } from 'src/app/services/eventos.service';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css']
})
export class ContadorComponent implements OnInit {


 // contador:number=5;
  constructor(public servicio:EventosService ) { }

  ngOnInit(): void {

   // this.servicio.contador;
  }

}
