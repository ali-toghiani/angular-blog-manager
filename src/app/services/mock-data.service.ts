import { Injectable } from '@angular/core';
import {BlogsListModel, BlogsModel} from "../models/blogs.model";
import {HttpClient} from "@angular/common/http";
import {environmet} from "../../environments/environment";
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MockDataService {
  $blogsSubject= new BehaviorSubject<BlogsModel[]>([]);
  blogs: BlogsModel[] = [];
  constructor(
    private http: HttpClient
  ) {
    this.initializeList();
  }

  initializeList(): void {
    console.log('ete');
    const url = environmet.mockApiUrl;
    this.http.get<BlogsListModel>(url).subscribe(
      {
        next: res => {
          this.blogs = res.data;
          this.$blogsSubject.next( this.blogs );
        }
      }
    )
  }

  getBlog( id : number | string ): BlogsModel {
    return this.blogs.find( item => item.id == id) || this.blogs[0];
  }

  postBlog( blog: BlogsModel): void {
    this.blogs.unshift(blog);
  }
}
