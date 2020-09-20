import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Appconfig} from '../app/app.config';

@Injectable({
  providedIn: 'root'
})

export class MoviesDataService {
  constructor(private http: HttpClient) { }

  async getAllMovies(): Promise<any> {
    return await this.http.get(Appconfig.baseApiUrl + `movies`).toPromise();
    }
}
