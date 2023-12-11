import { Component } from '@angular/core';
import {QuillEditorComponent, QuillViewHTMLComponent} from "ngx-quill";
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {NgIf} from "@angular/common";

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
      title: new FormControl('', Validators.required),
      image_url: new FormControl(this.defaultImageURL, Validators.required),
      main_text: new FormControl('', Validators.required),
    }
  )

  submit():void {
    this.isLoading = true;
    console.log( this.form.value)
  }


}
