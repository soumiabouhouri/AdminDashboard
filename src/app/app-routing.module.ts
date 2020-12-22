import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DefaultComponent} from './layouts/default/default.component';
import {DashboardComponent} from './modules/dashboard/dashboard.component';
import {PostsComponent} from './modules/posts/posts.component';
import {ArticlesComponent} from './modules/articles/articles.component';

const routes: Routes = [{
    path: '',
    component: DefaultComponent,
    children: [{
        path: '', // child route path
        component: DashboardComponent, // child route component that the router renders
      },
      {
        path: 'posts',
        component: PostsComponent
      },
      {
        path: 'articles',
        component: ArticlesComponent
      },
    ],
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
