import { Component, OnInit } from '@angular/core';
import { RES } from '../models/reservation.model';
import { Input } from '@angular/core';

@Component({
  selector: 'app-reservation',
  standalone: false,
  templateUrl: './reservation.component.html',
  styleUrl: './reservation.component.scss'
})
export class ReservationComponent {
  @Input() RES!: RES;
}
