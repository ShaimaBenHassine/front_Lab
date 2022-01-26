import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {GLOBAL} from "../app/app-config";
import {Utils} from "../utils/utils";
import {Member} from "../models/memeber.model";
import { Article } from 'src/models/article.model';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {


  constructor(
    private httpClient: HttpClient,
  ) {
  }

  getAllArticles(): Promise<Article[]> {
    return this.httpClient.get<Article[]>('http://localhost:9000/PUBLICATION-SERVICE/publications').toPromise();
    // return new Promise(resolve => resolve(this.placeholderArticles));
  }

  getArticleById(id: string): Promise<Article> {
     return this.httpClient.get<Article>(`http://localhost:9000/PUBLICATION-SERVICE/publication/${id}`).toPromise();
    // return new Promise(resolve => resolve(
    //   this.placeholderArticles.filter(item => item.id === id)[0] ?? null
    // ));
  }

  /**
   * create a new member or update an old member.
   * a new member doesn't have an id
   */
  saveArticle(article: any): Promise<Article> {
     return this.httpClient.post<Article>('http://localhost:9000/PUBLICATION-SERVICE/publication/save', article).toPromise();
    // const articleToSave = {
    //   id: article.id ?? Utils.fakeNumber().toString(),
    //   createdDate: article.createdDate ?? new Date().toISOString(), ...article
    // };
    // this.placeholderArticles = [articleToSave, ...this.placeholderArticles.filter(item => item.id !== article.id)];

    // return new Promise(resolve => resolve(articleToSave));
  }

  removeArticleById(id: string): Promise<void> {
     return this.httpClient.delete<void>(`http://localhost:9000/PUBLICATION-SERVICE/publication/${id}`).toPromise();
    // this.placeholderArticles = this.placeholderArticles.filter(item => item.id !== id);
    // return new Promise(resolve => resolve());
  }

}
