import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  private username:string;
  private clientId = 'e5ff621dd3b9d56a0c28';
  private clientSecret = 'bf3de6920319b98e854de656ff35fd50f9b6e0b2';
  url:string = 'https://api.github.com/users/';

  constructor(private http: HttpClient) { 
    this.username = '';
  }
 
  getUser(){
    return this.http.get(this.url + this.username +  '?client_id=' + this.clientId  + '&client_secret=' + this.clientSecret).pipe(map(res => res));
  }

  getRepos(){
    return this.http.get(this.url + this.username + '/repos?client_id=' + this.clientId + '&client_secret=' + this.clientSecret).pipe(map(res => res));
  }

  updateUser(username: string){
    this.username = username;
  }
}
