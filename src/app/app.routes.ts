import { Routes } from '@angular/router';
import {Paths} from "./enums/paths";
import {BlogsListComponent} from "./components/blogs-list/blogs-list.component";

export const routes: Routes = [
  {
    path: '',
    pathMatch: "full",
    redirectTo: Paths.BLOGS_LIST
  },
  {
    path: Paths.BLOGS_LIST,
    loadComponent: () => import('./components/blogs-list/blogs-list.component').then( mod => mod.BlogsListComponent)
  }
];
