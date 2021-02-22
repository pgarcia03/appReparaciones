import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Iporder } from 'src/app/interfaces/iporder';
import { EventosService } from 'src/app/services/eventos.service';
import { PorderService } from 'src/app/services/porder.service';
import { ReparacionService } from 'src/app/services/reparacion.service';

@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.css']
})
export class AutocompleteComponent implements OnInit {

  text: string='';
  desc:string='';
  results:any=[];
  estilo:string='';
  color:string='';
 // @Output() seleccion=new EventEmitter<any>();

  constructor(private po:PorderService,public evento:EventosService,public repServ:ReparacionService) {  }

  ngOnInit(): void {
  }
 
  search(event:any) {
    this.po.get(event.query,1).subscribe(data => {
        this.results = data;
    });
  }

  limpiarData()
  {
    this.results=[];
    this.text='';
    this.desc='';
    
    this.evento.porder.corte='';
    this.evento.contador=0;
    this.evento.porder.color='';
    this.evento.porder.estilo='';
    this.evento.estadoDesc('');
   
    this.estilo='';
    console.log(this.evento.porder);
  }

  corteSeleccionado(event:any) {   

     // this.seleccion.emit({ corte:event.corte,descr:event.descr,estilo:"ok" });

      this.evento.porder.corte=event.corte;
      this.evento.estadoDesc(event.descr);
      this.estilo=event.estilo;
      this.desc=event.descr;
      
     // this.evento.porder.color=this.color;
      this.repServ.getTotal(event.corte).subscribe(response=> this.evento.contador=response , error=>this.evento.contador=0);

  }

  CambioDesc(des:string)
  {
    if(des!="")
    this.evento.estadoDesc(des); 
  }
}
