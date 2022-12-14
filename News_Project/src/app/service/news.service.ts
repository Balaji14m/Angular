import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  // api_key="a0788f5413b045729112ca9f3c73c55d"
  constructor(private http : HttpClient) {  }
  
  topNews='https://newsapi.org/v2/top-headlines?country=us&apiKey=a0788f5413b045729112ca9f3c73c55d'
  
  // topHeadlines():Observable< any >{
  //   return this.http.get(this.topNews);
  // }
  initSources() {
    return this.http.get('https://newsapi.org/v2/sources?language=en&apiKey=a0788f5413b045729112ca9f3c73c55d');
  }

  // initSources() {
  //   return this.http.get('https://newsapi.org/v2/sources?language=en&apiKey=' + this.api_key);
  


   initArticles() {
     return this.http.get('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=a0788f5413b045729112ca9f3c73c55d');
  }

  getArticlesByID(source: String) {
    return this.http.get('https://newsapi.org/v2/top-headlines?sources=' + source + '&apiKey=a0788f5413b045729112ca9f3c73c55d');
  }

}
