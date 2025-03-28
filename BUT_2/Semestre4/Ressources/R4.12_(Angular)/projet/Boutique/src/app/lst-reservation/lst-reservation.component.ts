import { Component, OnInit } from '@angular/core';
import { RES } from '../models/reservation.model';
import { ReservationsService } from '../services/reservations.service';

@Component({
  selector: 'app-lst-reservation',
  standalone: false,
  templateUrl: './lst-reservation.component.html',
  styleUrl: './lst-reservation.component.scss',
})
export class LstReservationComponent implements OnInit {
  lstRes!: RES[];
  constructor(private reservationsService: ReservationsService) {}
  ngOnInit(): void {
    this.lstRes = this.reservationsService.getRES();
  }
}
