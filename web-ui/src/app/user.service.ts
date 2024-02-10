import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
const endpoint='https://localhost:7078/api/Book?key=dsfds';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  getAllPost(url:string):Observable<any>
  {
    return this.http.get(url);
  }
}
