import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from './post.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  apiUrl = 'http://localhost/api/articles';
  //apiUrl = 'https://jsonplaceholder.typicode.com/users'
  constructor(private _http: HttpClient) { }

  getPosts(){
    return this._http.get<any>(this.apiUrl);
  }
}
