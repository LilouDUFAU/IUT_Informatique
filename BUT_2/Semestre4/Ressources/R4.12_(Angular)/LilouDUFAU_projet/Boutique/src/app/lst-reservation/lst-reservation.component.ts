import { ReservationsService } from './../services/reservations.service';
import { Component, OnInit } from '@angular/core';
import { RES } from '../models/reservation.model';

@Component({
  selector: 'app-lst-reservation',
  standalone: false,
  templateUrl: './lst-reservation.component.html',
  styleUrl: './lst-reservation.component.scss',
})
export class LstReservationComponent implements OnInit {
  lstRes!: RES[];
  filteredRes!: any[];
  titreJeu: string[] = [];
  searchTerm: string = '';

  constructor(private reservationsService: ReservationsService) {}
  ngOnInit(): void {
    this.reservationsService.getRES().subscribe((ress) => {
      this.lstRes = ress;
      this.filteredRes = ress;
      this.titreJeu = [...new Set(ress.map((res) => res.titreJeu))];
    });
  }

  applyFilters(filters: { titreJeu?: string }): void {
    this.filteredRes = this.lstRes.filter((res) => {
      const matchesFilter = !filters.titreJeu || res.titreJeu === filters.titreJeu;
      return matchesFilter;
    });
  }

  onSearch(term: string): void {
    this.filteredRes = this.lstRes.filter((res) =>
      res.nomClient?.toLowerCase().includes(term.toLowerCase()) ||
      res.titreJeu.toLowerCase().includes(term.toLowerCase()) ||
      res.plateformeJeu.toLowerCase().includes(term.toLowerCase())
    );
  }
}
