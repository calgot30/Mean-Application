import { Component, EventEmitter, Output } from '@angular/core';
import { Post } from '../posts.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent {
  enteredContent = "";
  enteredTitle = "";
  @Output() postCreated = new EventEmitter<Post>();


  onAddPost(form: NgForm) {
    const post: Post =
    {
      title: form.value.title,
      content: form.value.content
    };
    this.postCreated.emit(post);
  }

}
