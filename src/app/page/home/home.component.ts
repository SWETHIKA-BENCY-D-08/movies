import { Component, OnInit } from '@angular/core';
import { MovieApiServiceService } from 'src/app/service/movie-api-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  constructor(private service:MovieApiServiceService) { }

  bannerResult:any=[];
  trendingMovieResult:any=[];
  actionMovieResult:any=[];
  adventureMovieResult:any=[];
  comedyMovieResult:any=[];
  scifiMovieResult:any=[];
  thrillerMovieResult:any=[];
  documentaryMovieResult:any=[];
  animationMovieResult:any=[];


  ngOnInit(): void {

    this.bannerData();
    this.trendingData();
    this.actionMovie();
    this.adventureMovie();
    this.thrillerMovie();
    this.comedyMovie();
    this.scifiMovie();
    this.documentaryMovie();
    this.animationMovie();
  }

  bannerData(){
    this.service.bannerApiData().subscribe((result)=>{
      console.log(result,'bannerresult#');
      this.bannerResult = result.results;
    });
  }
  
  trendingData(){
    this.service.trendingMovieApiData().subscribe((result)=>{
      console.log(result,'trendingresult#');
      this.trendingMovieResult = result.results;
    });
  }

  //action
  actionMovie(){
    this.service.fetchActionMovies().subscribe((result)=>{
      console.log(result,'actionmovie#');
      this.actionMovieResult = result.results;
    })
  }

  //adventure
  adventureMovie(){
    this.service.fetchAdventureMovies().subscribe((result)=>{
      console.log(result,'adventurenmovie#');
      this.adventureMovieResult = result.results;
    })
  }

  //animation
  animationMovie(){
    this.service.fetchAnimationMovies().subscribe((result)=>{
      console.log(result,'animationnmovie#');
      this.animationMovieResult = result.results;
    })
  }

  //comedy
  comedyMovie(){
    this.service.fetchComedyMovies().subscribe((result)=>{
      console.log(result,'comedynmovie#');
      this.comedyMovieResult = result.results;
    })
  }

  //doucumentary
  documentaryMovie(){
    this.service.fetchDocumentaryMovies().subscribe((result)=>{
      console.log(result,'doucumentarynmovie#');
      this.documentaryMovieResult = result.results;
    })
  }

  //scifi
  scifiMovie(){
    this.service.fetchScifiMovies().subscribe((result)=>{
      console.log(result,'scifimovie#');
      this.scifiMovieResult = result.results;
    })
  }

  //thriller
  thrillerMovie(){
    this.service.fetchThrillerMovies().subscribe((result)=>{
      console.log(result,'thrillernmovie#');
      this.thrillerMovieResult = result.results;
    })
  }

}
