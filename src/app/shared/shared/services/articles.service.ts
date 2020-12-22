import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {Article} from '../../../Article';
import {Articles} from '../../../mock-articles';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  constructor(
    private http: HttpClient) { }
  getArticles(): Observable<Article[]> {
    return of(Articles);
  }
}
