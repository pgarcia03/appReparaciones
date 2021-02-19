import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Iporder } from 'src/app/interfaces/iporder';
import { EventosService } from 'src/app/services/eventos.service';
import { PorderService } from 'src/app/services/porder.service';

@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.css']
})
export class AutocompleteComponent implements OnInit {

  text: string='';
  desc:string='';
  results:any=[];

 // @Output() seleccion=new EventEmitter<any>();

  constructor(private po:PorderService,public evento:EventosService) {  }

  ngOnInit(): void {
  }
 
  search(event:any) {
    this.po.get(event.query,1).subscribe(data => {
        this.results = data;
      //  console.log(this.results);
    });
  }

   
  corteSeleccionado(event:any) {   

     // this.seleccion.emit({ corte:event.corte,descr:event.descr,estilo:"ok" });

      this.evento.porder.corte=event.corte;

      this.evento.estadoDesc(event.descr);
      this.desc=event.descr;

  }

  CambioDesc(des:string)
  {
    this.evento.estadoDesc(des); 
  }
}
