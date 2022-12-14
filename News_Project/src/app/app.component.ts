import { AfterViewInit,Component, ViewChild } from '@angular/core';
import{ MatSidenav } from '@angular/material/sidenav';
import { NewsService } from './service/news.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements AfterViewInit {
    title='newsapp';
    selectedNewsChannel: string='Top 10 Trending News!';
    public articles:any = [];
      
    public sources: any = [];
    @ViewChild('sidenav',{static:true}) public sidenav!:MatSidenav;
    private result:any;

    ngOnInit(): void {
      
      this.api.initArticles().subscribe((res:any)=>{
        console.log(res);
        this.articles = res.articles;
      })

      this.api.initSources().subscribe((res:any)=>{
        console.log(res);
        this.sources = res.sources;
      })
      

    }
    searchSource(source:any){
      this.api.getArticlesByID(source.id)
      .subscribe((res:any)=>{
        this.selectedNewsChannel = source.name
        this.articles = res.articles;
      })
    }
    constructor( private api:NewsService){}
    
  ngAfterViewInit() {
    this.sidenav.close();
    
    }
    
  }

  // @Component({
  //   selector: 'slide-toggle-configurable-example',
  //   templateUrl: 'slide-toggle-configurable-example.html',
  //   styleUrls: ['slide-toggle-configurable-example.css'],
  // })
  // export class SlideToggleConfigurableExample {
  //   color: ThemePalette = 'accent';
  //   checked = false;
  //   disabled = false;
  // }