import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseUrl = 'http://127.0.0.1:9080/api/Porders';

@Injectable({
  providedIn: 'root'
})
export class PorderService {

  constructor(private http:HttpClient) {   }

  getAll():Observable<any>{
    return this.http.get(baseUrl);
  }

  get(corte:any,test:any):Observable<any>{
    return this.http.get(`${baseUrl}/${corte},${test}`);
  }

  create(data:any):Observable<any>{
    return this.http.post(baseUrl,data);
  }

  update(id:any,data:any):Observable<any>{
    return this.http.put(`${baseUrl}/${id}`,data);
  }

  delete(id:any):Observable<any>{
    console.log(`${baseUrl}/${id}`);
    return this.http.delete(`${baseUrl}/${id}`);
  }

}
