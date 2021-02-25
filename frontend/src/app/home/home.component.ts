import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { Post } from '../post.model';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    posts$: Post[];
    apiUrl:string = 'http://localhost:8000/api/articles';
    apiPostUrl:string = 'http://localhost:8000/api/article';
    apiPostUrlTest:string = 'http://httpbin.org/post';
    

    headers = new HttpHeaders().set('Content-Type', 'application/json;charset=utf-8');

    constructor(private http: HttpClient){}

    ngOnInit(){
      return  this.http.get<any>(this.apiUrl).subscribe(
        data => {this.posts$ = data});
      }
    onSubmit(data){

        this.http.post(this.apiPostUrl, data)
        .subscribe((result)=>{
          console.warn("result", result)
          window.location.reload();
        })

        console.warn(data);
    }
   deletePost(id){
     let endpoint = this.apiPostUrl + '/' + id;
    this.http.delete(endpoint)
    .subscribe((result) =>{
      console.warn(result)
      window.location.reload();
    })
    
   }

}
