import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseUrl = 'http://127.0.0.1:9080/api/MatrizDefPos';

@Injectable({
  providedIn: 'root'
})
export class ReparacionService {

  constructor(private http:HttpClient) {   }

  getAll():Observable<any>{
    return this.http.get(baseUrl);
  }

  get(id:any):Observable<any>{
    return this.http.get(`${baseUrl}/${id}`);
  }

  getTotal(corte:string):Observable<any>{

    return  this.http.get(`${baseUrl}/${corte}`);
  }

  getdesc(id:any,desc:any,corte:any):Observable<any>{
    
    return this.http.get(`${baseUrl}/${id}&${desc}&${corte}`);
  }

  create(data:any):Observable<any>{
    return this.http.post(baseUrl,data);
  }

  update(id:any,data:any):Observable<any>{
    return this.http.put(`${baseUrl}/${id}`,data);
  }

  delete(id:number,corte:string,inspector:string):Observable<any>{
    //console.log(`${baseUrl}/${id}`);
    return this.http.delete(`${baseUrl}/${id}&${corte}&${inspector}`);
  }


}
