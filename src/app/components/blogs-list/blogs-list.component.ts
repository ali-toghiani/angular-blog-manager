import {Component, OnInit} from '@angular/core';
import {BlogsListModel, BlogsModel} from "../../models/blogs.model";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {Subscription} from "rxjs";
import {NgForOf, NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-blogs-list',
  standalone: true,
  imports: [
    HttpClientModule,
    NgForOf,
    NgOptimizedImage
  ],
  templateUrl: './blogs-list.component.html',
  styleUrl: './blogs-list.component.scss'
})
export class BlogsListComponent implements OnInit {

  blogs: BlogsModel[] = [];
  subscriptions = new Subscription();
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
            this.blogs = res.data;
            console.log(this.blogs);
          }
        }
      )
    )
  }
}
