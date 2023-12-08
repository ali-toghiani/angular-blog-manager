import {Component, OnInit} from '@angular/core';
import {BlogsListModel, BlogsModel} from "../../models/blogs.model";
import {Subscription} from "rxjs";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-blog-view',
  standalone: true,
  imports: [HttpClientModule, NgOptimizedImage],
  templateUrl: './blog-view.component.html',
  styleUrl: './blog-view.component.scss'
})
export class BlogViewComponent implements OnInit {

  subscriptions = new Subscription();
  blog: BlogsModel | undefined;
  constructor(
    private http: HttpClient
  ) {
  }
  ngOnInit(): void {
    const url = 'assets/mock-data/blogs-mock.json'
    this.subscriptions.add(
      this.http.get<BlogsListModel>(url).subscribe(
        {
          next: res => {
            this.blog = res.data[0];
          }
        }
      )
    )
  }
}
