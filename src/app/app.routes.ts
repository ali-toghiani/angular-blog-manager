import { Routes } from '@angular/router';
import {Paths} from "./enums/paths";
import {BlogsListComponent} from "./components/blogs/blogs-list/blogs-list.component";

export const routes: Routes = [
  {
    path: '',
    pathMatch: "full",
    redirectTo: Paths.BLOGS_LIST
  },
  {
    path: Paths.BLOGS_LIST,
    loadComponent: () => import('./components/blogs/blogs-list/blogs-list.component').then(mod => mod.BlogsListComponent)
  },
  {
    path: `${Paths.BLOGS_LIST}/:id`,
    loadComponent: () => import('./components/blogs/blog-view/blog-view.component').then(mod => mod.BlogViewComponent)
  },
  {
    path: Paths.CREATE_BLOGS,
    loadComponent: () => import('./components/blogs/create-blog/create-blog.component').then(mod => mod.CreateBlogComponent)
  },
  {
    path: '**',
    redirectTo: Paths.BLOGS_LIST
  }
];
