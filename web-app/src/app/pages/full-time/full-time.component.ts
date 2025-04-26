import { Component, OnInit } from '@angular/core';
import { FootballService } from '../../football.service';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-full-time',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './full-time.component.html',
  styleUrl: './full-time.component.scss',
})
export class FullTimeComponent implements OnInit {
  fixturesByLeague: { [key: string]: any[] } = {
    premierLeague: [],
    serieA: [],
    laLiga: [],
    bundesliga: [],
    ligue1: [],
  };
  loading = true;

  constructor(private footballService: FootballService) {}

  ngOnInit(): void {
    this.loading = true;

    // Charger les résultats des matchs terminés pour chaque ligue
    this.loadPremierLeagueFixtures();
    this.loadSerieAFixtures();
    this.loadLaLigaFixtures();
    this.loadBundesligaFixtures();
    this.loadLigue1Fixtures();
  }

  private loadPremierLeagueFixtures(): void {
    this.footballService.getFixturesFullTime(39).subscribe({
      next: (data) => {
        console.log('Résultats terminés pour Premier League:', data);
        this.fixturesByLeague['premierLeague'] = data.response;
      },
      error: (error) => {
        console.error(
          'Erreur lors du chargement des résultats pour Premier League:',
          error
        );
      },
      complete: () => {
        this.loading = false;
      },
    });
  }

  private loadSerieAFixtures(): void {
    this.footballService.getFixturesFullTime(135).subscribe({
      next: (data) => {
        console.log('Résultats terminés pour Serie A:', data);
        this.fixturesByLeague['serieA'] = data.response;
      },
      error: (error) => {
        console.error(
          'Erreur lors du chargement des résultats pour Serie A:',
          error
        );
      },
      complete: () => {
        this.loading = false;
      },
    });
  }

  private loadLaLigaFixtures(): void {
    this.footballService.getFixturesFullTime(140).subscribe({
      next: (data) => {
        console.log('Résultats terminés pour La Liga:', data);
        this.fixturesByLeague['laLiga'] = data.response;
      },
      error: (error) => {
        console.error(
          'Erreur lors du chargement des résultats pour La Liga:',
          error
        );
      },
      complete: () => {
        this.loading = false;
      },
    });
  }
  private loadBundesligaFixtures(): void {
    this.footballService.getFixturesFullTime(78).subscribe({
      next: (data) => {
        console.log('Résultats terminés pour Bundesliga:', data);
        // Filtrer les matchs terminés
        this.fixturesByLeague['bundesliga'] = data.response.filter(
          (fixture: any) => fixture.fixture.status.short === 'FT'
        );
      },
      error: (error) => {
        console.error('Erreur lors du chargement des résultats pour Bundesliga:', error);
      },
      complete: () => {
        this.loading = false;
      },
    });
  }


  private loadLigue1Fixtures(): void {
    this.footballService.getFixturesFullTime(61).subscribe({
      next: (data) => {
        console.log('Résultats terminés pour Ligue 1:', data);
        this.fixturesByLeague['ligue1'] = data.response;
      },
      error: (error) => {
        console.error(
          'Erreur lors du chargement des résultats pour Ligue 1:',
          error
        );
      },
      complete: () => {
        this.loading = false;
      },
    });
  }
}
