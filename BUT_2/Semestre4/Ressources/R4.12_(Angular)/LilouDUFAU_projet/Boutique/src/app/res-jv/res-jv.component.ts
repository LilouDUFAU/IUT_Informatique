import { Component, OnInit } from '@angular/core';
import { RES } from '../models/reservation.model';
import { ReservationsService } from '../services/reservations.service';
import { ActivatedRoute } from '@angular/router';
import { JVComponent } from '../jv/jv.component';

@Component({
  selector: 'app-res-jv',
  standalone: false,
  templateUrl: './res-jv.component.html',
  styleUrl: './res-jv.component.scss'
})

export class ResJvComponent implements OnInit {
  resJv!: RES[];
  titreJeu!: string;
  plateformeJeu!: string;
  constructor(private reservationsService: ReservationsService, private route: ActivatedRoute) {}
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.titreJeu = decodeURIComponent(params.get('titreJeu') || '');
      this.plateformeJeu = decodeURIComponent(params.get('plateformeJeu') || '');

      console.log('titreJeu:', this.titreJeu, 'plateformeJeu:', this.plateformeJeu);

      this.reservationsService.getResByJv(this.titreJeu, this.plateformeJeu).subscribe(res => {
        this.resJv = res;
      }, error => {
        console.error('Error fetching reservations:', error);
      });
    });
  }
}
