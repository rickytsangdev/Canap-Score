import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class FootballService {

  private apiUrl = 'https://v3.football.api-sports.io/fixtures?live=all';
  private apiKey = 'a3b4f20c5a2dcc17a20e0edad582a8d0';



  constructor(private http: HttpClient) {

   }

   getFixtures(leagueId: number): Observable<any> {
    const headers = new HttpHeaders({
      'x-rapidapi-key': this.apiKey,
      'x-rapidapi-host': 'api-football-v1.p.rapidapi.com',
    });


    const params = {
      league: leagueId.toString(),
      live: 'all',
      timezone: 'Europe/Paris', // Ajout du paramètre timezone
    };

    return this.http.get(this.apiUrl, { headers, params });

  }

  getFixturesFullTime(leagueId: number): Observable<any> {
    const headers = new HttpHeaders({
      'x-rapidapi-key': this.apiKey,
      'x-rapidapi-host': 'api-football-v1.p.rapidapi.com',
    });

    const params = {
      league: leagueId.toString(),
      status: 'FT', // Récupérer uniquement les matchs terminés
      timezone: 'Europe/Paris',
    };

    console.log(`Requête pour la ligue ${leagueId} avec params:`, params);


    return this.http.get(this.apiUrl, { headers, params });
  }
}
