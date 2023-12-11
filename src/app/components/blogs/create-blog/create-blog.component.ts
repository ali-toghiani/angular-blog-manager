import { Component } from '@angular/core';
import {QuillEditorComponent, QuillViewHTMLComponent} from "ngx-quill";

@Component({
  selector: 'app-create-blog',
  standalone: true,
  imports: [
    QuillViewHTMLComponent,
    QuillEditorComponent
  ],
  templateUrl: './create-blog.component.html',
  styleUrl: './create-blog.component.scss'
})
export class CreateBlogComponent {

}
