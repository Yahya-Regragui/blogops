import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { Post } from '../post.model';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit {


    posts$: Post[];
    apiUrl:string = 'http://localhost:8000/api/articles';
    apiPostUrl:string = 'http://localhost:8000/api/article';
    post_id : number;
    post_body : string;
    post_title : string;
    post_saved : boolean = false;
    
    headers = new HttpHeaders().set('Content-Type', 'application/json;charset=utf-8');

    constructor( private router: Router,private route: ActivatedRoute, private http: HttpClient){}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.post_id = params.id
      this.post_body = params.body
      this.post_title = params.title;
  });
  }
  postUpdate(data){
    this.http.put(this.apiPostUrl, data)
    .subscribe((result) =>{
      console.warn("result", result)
    })
    console.log(data);

  }
  postSaved(){
    this.post_saved = !this.post_saved;
  }
  

}
