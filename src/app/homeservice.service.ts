import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class HomeserviceService {

  constructor(private http:HttpClient) { }

  getdata(){
    return this.http.get<any>('https://jsonplaceholder.typicode.com/users');
  }
}
