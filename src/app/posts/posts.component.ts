import { Component } from '@angular/core';
import { PostsService } from '../services/posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent {
  posts: any;

  constructor(private service: PostsService){}

  ngOnInit(): void {
    this.service.getAll()
    .subscribe(response => this.posts = response);
}

createPost(input: HTMLInputElement){
  let post = {title: input.value}
  this.posts.splice(0,0,post);

  input.value ='';

  this.service.create(post)
  .subscribe(
    {
      next: response =>{
        post['id'] = response['id'];
      }
    }
  );
}

updatePost(post){
  this.service.update(post)
  .subscribe(
    {
      next: res =>{
        console.log(res);
      }
    }
  );
}

deletePost(post){
  let index =  this.posts.indexOf(post);
  this.posts.splice(index,1);

  this.service.delete(post.id)
  .subscribe(
    {
      next: res => {
       
    }
  })
}
}
