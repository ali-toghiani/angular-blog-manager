import { Component } from '@angular/core';
import {QuillEditorComponent, QuillViewHTMLComponent} from "ngx-quill";
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {NgIf} from "@angular/common";
import {BlogsModel} from "../../../models/blogs.model";
import {MockDataService} from "../../../services/mock-data.service";
import {Router} from "@angular/router";
import {Paths} from "../../../enums/paths";

@Component({
  selector: 'app-create-blog',
  standalone: true,
  imports: [
    QuillViewHTMLComponent,
    QuillEditorComponent,
    ReactiveFormsModule,
    NgIf
  ],
  templateUrl: './create-blog.component.html',
  styleUrl: './create-blog.component.scss'
})
export class CreateBlogComponent {

  isLoading = false;
  defaultImageURL = "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGVvcGxlJTIwYXQlMjB3b3JrfGVufDB8fDB8fHww";
  form = new FormGroup(
    {
      title: new FormControl('', { validators: Validators.required, nonNullable: true}),
      image_url: new FormControl(this.defaultImageURL, { validators: Validators.required, nonNullable: true}),
      main_text: new FormControl('', { validators: Validators.required, nonNullable: true}),
    }
  )

  constructor(
    private mockDataService: MockDataService,
    private router: Router
  ) {
  }

  submit():void {
    this.isLoading = true;

    const { title, image_url, main_text } = this.form.controls;

    const data: BlogsModel = {
      id: Math.floor(Math.random() * 9000) + 1000,
      title: title.value,
      image_url: image_url.value,
      main_text: main_text.value,
      date: (new Date()).toDateString(),
      author_name: "John Doe",
      author_avatar_url: 'https://randomuser.me/api/portraits/men/41.jpg',
      comments: []
    }
    this.mockDataService.postBlog( data )
    setTimeout( () => {
      this.router.navigate(['/', Paths.BLOGS_LIST, data.id]);
    }, 3000);
  }
}
