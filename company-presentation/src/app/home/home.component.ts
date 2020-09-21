import { Component, OnInit } from '@angular/core';
import { MoviesDataService } from 'src/core/moviesdata.service';
import { LoginService } from '../../core/login.service';


@Component({
  selector: 'app-home-page',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  allMovies: any;
  constructor(private moviesDataService: MoviesDataService) { }

  async ngOnInit(): Promise<any> {
  this.allMovies = await this.moviesDataService.getAllMovies();
  }
}
