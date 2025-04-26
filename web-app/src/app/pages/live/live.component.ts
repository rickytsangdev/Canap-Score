import { NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import mockData from '../../../assets/data-mock.json'
import { FootballService } from '../../football.service';


@Component({
  selector: 'app-live',
  standalone: true,
  imports: [NgIf, NgFor],
  templateUrl: './live.component.html',
  styleUrl: './live.component.scss'
})
export class LiveComponent implements OnInit {
  fixturesByLeague: { [key: string]: any[] } = {
    premierLeague: [],
    serieA: [],
    laLiga: [],
    bundesliga: [],
    ligue1: [], 
  };
  loading = true;

  constructor(private footballService: FootballService) { }

  ngOnInit(): void {
      // IDs des ligues
    const leagues = {
      premierLeague: 39, // Premier League (Angleterre)
      serieA: 135, // Serie A (Italie)
      laLiga: 140, // La Liga BBVA (Espagne)
      bundesliga: 78,
      ligue1: 61 // Bundesliga (Allemagne)
    };

   // Charger les fixtures pour chaque ligue
   Object.entries(leagues).forEach(([key, leagueId]) => {
    this.footballService.getFixtures(leagueId).subscribe({
      next: (data) => {
        console.log(`Réponse API pour ${key}:`, data);
        this.fixturesByLeague[key] = data.response; // Stocker les fixtures par ligue
      },
      error: (error) => {
        console.error(`Erreur lors du chargement des fixtures pour ${key}:`, error);
      },
      complete: () => {
        this.loading = false;
      },
    });
  });
  }





}





