import { ReservationsService } from './../services/reservations.service';
import { Component, OnInit } from '@angular/core';
import { RES } from '../models/reservation.model';
import { Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-reservation',
  standalone: false,
  templateUrl: './reservation.component.html',
  styleUrl: './reservation.component.scss'
})
export class ReservationComponent implements OnInit{
  @Input() RES!: RES;
  theRes !: RES;
  idres !: string;
  resAvecJeu !: RES;

  constructor(private resService: ReservationsService, private route: ActivatedRoute) { }
  ngOnInit(): void {
    this.idres = this.route.snapshot.params['id'];
    if (this.idres !== undefined) {
      this.theRes = this.resService.getResById(+this.idres);
    } else {
      this.theRes = this.RES;
    }
  }

  onReserve() {
    // this.resService.addRes(this.theRes);
    alert('Reservation effectuée avec succès');
  }

  onDelete() {
    // this.resService.deleteRes(this.theRes);
    alert('Reservation annulée avec succès');
  }

  onUpdate() {
    // this.resService.updateRes(this.theRes);
    alert('Reservation modifiée avec succès');
  }

}
