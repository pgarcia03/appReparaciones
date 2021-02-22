import { Component, Input, OnInit } from '@angular/core';
import { Iporder } from 'src/app/interfaces/iporder';
import { EventosService } from 'src/app/services/eventos.service';

import { ReparacionService } from 'src/app/services/reparacion.service';

@Component({
  selector: 'app-listar-defectos',
  templateUrl: './listar-defectos.component.html',
  styleUrls: ['./listar-defectos.component.css']
})
export class ListarDefectosComponent implements OnInit {

  @Input() id:number=0;

  reparaciones: any=[];

  rowGroupMetadata: any;

  constructor(private reparacionService: ReparacionService,public evento:EventosService) { }

  ngOnInit() {
      this.evento.$estado.subscribe(val => {
        if (this.evento.porder.corte!='' && val!='')
        this.reparacionService.getdesc(this.id,val,this.evento.porder.corte).subscribe(data => {
            this.reparaciones = data;

            this.updateRowGroupMetaData();
  
        });
        else
        this.reparaciones=[];
      });
      
     
  }

  aumento(obj:any)
  {

    let data:any={
        id: obj.id,
        idPosicion:obj.idPosicion ,
        idDefecto: obj.idDefecto,
        inspector: "mod2",
        corte: this.evento.porder.corte,
        color: this.evento.porder.color
    }

    this.reparacionService.create(data)
                          .subscribe(response=>{
                                        
                                         this.evento.contador=response.unidadestotal;

                                         this.reparacionService.getdesc(this.id,this.evento.desc,this.evento.porder.corte).subscribe(data => {
                                         this.reparaciones = data;
                                         
                                         this.updateRowGroupMetaData();
                                
                                         });
                                   },error=>{
                                         console.log(error);
                                   }
    );

  }

  eliminar(obj:any)
  {
    let data:any={
      id: obj.id,
      corte: this.evento.porder.corte,
      inspector:"mod2E"
       }

       this.reparacionService.delete(data.id,data.corte,data.inspector)
                             .subscribe(response=>{
                               
                                this.evento.contador=response.unidadestotal
                               
                                this.reparacionService.getdesc(this.id,this.evento.desc,this.evento.porder.corte).subscribe(data => {
                                
                                  this.reparaciones = data;
                                  this.updateRowGroupMetaData();
                        
                                 });
                              },
                                       error=>{console.log(error)}
                              );

  }

  updateRowGroupMetaData() {
      this.rowGroupMetadata = {};

      if (this.reparaciones) {
  
          for (let i = 0; i < this.reparaciones.length; i++) {
              let rowData = this.reparaciones[i];
              let representativeName = rowData.posicion;
             
              if (i == 0) {
                  this.rowGroupMetadata[representativeName] = { index: 0, size: 1 };
              }
              else {
                  let previousRowData = this.reparaciones[i - 1];
                  let previousRowGroup = previousRowData.posicion;
                  if (representativeName === previousRowGroup)
                     { 
                         this.rowGroupMetadata[representativeName].size++;                     
                      }
                  else
                      {
                          this.rowGroupMetadata[representativeName] = { index: i, size: 1 };                        
                     }
              }

          }
          

      }
  }

}
