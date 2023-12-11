import {Component, OnInit} from '@angular/core';
import {BlogsModel} from "../../../models/blogs.model";
import {HttpClientModule} from "@angular/common/http";
import {Subscription} from "rxjs";
import {NgForOf, NgIf, NgOptimizedImage} from "@angular/common";
import {RouterLink} from "@angular/router";
import {Paths} from "../../../enums/paths";
import {MockDataService} from "../../../services/mock-data.service";
import {animate, query, stagger, style, transition, trigger} from "@angular/animations";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-blogs-list',
  standalone: true,
  imports: [
    HttpClientModule,
    NgForOf,
    NgOptimizedImage,
    RouterLink,
    NgIf,
    FormsModule
  ],
  animations: [
    trigger('listAnimation', [
      transition('* => *', [ // each time the binding value changes
        query(':leave', [
          stagger(100, [
            animate('0.5s', style({ opacity: 0 }))
          ])
        ],{ optional: true }),
        query(':enter', [
          style({ opacity: 0 }),
          stagger(100, [
            animate('0.5s', style({ opacity: 1 }))
          ])
        ], { optional: true })
      ])
    ])
  ],
  templateUrl: './blogs-list.component.html',
  styleUrl: './blogs-list.component.scss'
})
export class BlogsListComponent implements OnInit {

  blogs: BlogsModel[] = [];
  filteredBlogs: BlogsModel[] = [];
  searchString = '';
  showingBlogsLimit =  9;

  readonly batchCount = 9;
  constructor(
    private mockDataService: MockDataService
  ) {
  }

  ngOnInit(): void {
    this.mockDataService.$blogsSubject.subscribe({
      next: res => {
        this.blogs = res;
        this.filteredBlogs = this.blogs;
      }
    })
  }

  get pathsEnum(): typeof Paths {
    return Paths;
  }

  filterList(): void {
    if ( this.searchString.length < 3) {
      this.filteredBlogs = this.blogs;
    } else {
      this.filteredBlogs = this.blogs.filter( blog => blog.title.toLowerCase().includes(this.searchString.toLowerCase()))
    }
  }

  loadMorePosts(): void{
    this.showingBlogsLimit += this.batchCount;
  }
}
