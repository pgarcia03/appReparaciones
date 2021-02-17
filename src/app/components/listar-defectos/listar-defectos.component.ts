import { Component, OnInit } from '@angular/core';

import { ReparacionService } from 'src/app/services/reparacion.service';

@Component({
  selector: 'app-listar-defectos',
  templateUrl: './listar-defectos.component.html',
  styleUrls: ['./listar-defectos.component.css']
})
export class ListarDefectosComponent implements OnInit {

  id:number=2;  

  reparaciones: any=[];

  rowGroupMetadata: any;

  constructor(private reparacionService: ReparacionService) { }

  ngOnInit() {
      this.reparacionService.get(this.id).subscribe(data => {
          this.reparaciones = data;
          this.updateRowGroupMetaData();
      });
  }

 
  updateRowGroupMetaData() {
      this.rowGroupMetadata = {};

      if (this.reparaciones) {
         console.log(this.reparaciones);
          for (let i = 0; i < this.reparaciones.length; i++) {
              let rowData = this.reparaciones[i];
              let representativeName = rowData.posicion;
              console.log(representativeName);
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

              console.log(this.rowGroupMetadata);
          }
      }
  }

}
