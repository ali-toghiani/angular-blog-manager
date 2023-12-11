import {Component, OnInit} from '@angular/core';
import {BlogsModel} from "../../../models/blogs.model";
import {Subscription} from "rxjs";
import {HttpClientModule} from "@angular/common/http";
import {NgForOf, NgIf, NgOptimizedImage} from "@angular/common";
import {ActivatedRoute} from "@angular/router";
import {MockDataService} from "../../../services/mock-data.service";

@Component({
  selector: 'app-blog-view',
  standalone: true,
  imports: [HttpClientModule, NgOptimizedImage, NgIf, NgForOf],
  templateUrl: './blog-view.component.html',
  styleUrl: './blog-view.component.scss'
})
export class BlogViewComponent implements OnInit {

  blog: BlogsModel | undefined;
  blogId: number;

  readonly DEFAULT_SHOWN_COMMENTS_COUNT = 5;
  loadAllComments = false;
  constructor(
    private mockDataService: MockDataService,
    private activatedRoute: ActivatedRoute
  ) {
    this.blogId = this.activatedRoute.snapshot.params['id'];
  }
  ngOnInit(): void {
    setTimeout(()=> {
      this.blog = this.mockDataService.getBlog( this.blogId )
    }, 100);
  }
}
