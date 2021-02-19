import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Iporder } from '../interfaces/iporder';

@Injectable({
  providedIn: 'root'
})
export class EventosService {

  contador:number=0;
  desc:string='';
  porder:Iporder={
                   objectId:0,
                   corte:'',
                   estilo:'',
                   descr:'',
                   idEstilo:0,
                   unidades:0,
                   color:''
                  };

  private estado = new Subject<string>();

  public $estado = this.estado.asObservable();

  constructor() { }

  estadoDesc(val: string){
    this.estado.next(val);

    this.desc=val;
  }
  
}
