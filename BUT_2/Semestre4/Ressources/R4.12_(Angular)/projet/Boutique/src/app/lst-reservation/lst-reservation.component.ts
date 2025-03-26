import { Component, OnInit } from '@angular/core';
import { RES } from '../models/reservation.model';

@Component({
  selector: 'app-lst-reservation',
  standalone: false,
  templateUrl: './lst-reservation.component.html',
  styleUrl: './lst-reservation.component.scss'
})
export class LstReservationComponent implements OnInit{
  lstRes!: RES[];
  ngOnInit(): void {
    this.lstRes =  [
      {
        id: 1,
        nomClient: "Jean Dupont",
        emailClient: "jean.dupont@example.com",
        telephoneClient: "0123456789",
        titreJeu: "The Legend of Zelda: Breath of the Wild",
        plateformeJeu: "Nintendo Switch",
        dateReservation: new Date(2024,3,25),
        statutReservation: "Confirmée"
      },
      {
        id: 2,
        nomClient: "Alice Martin",
        emailClient: "alice.martin@example.com",
        telephoneClient: "0987654321",
        titreJeu: "God of War",
        plateformeJeu: "PlayStation 4",
        dateReservation: new Date(2024,3,26),
        statutReservation: "En attente"
      },
      {
        id: 3,
        nomClient: "Lucas Bernard",
        emailClient: "lucas.bernard@example.com",
        telephoneClient: "0671234567",
        titreJeu: "Elden Ring",
        plateformeJeu: "PlayStation 5",
        dateReservation: new Date (2024,3,20),
        statutReservation: "Confirmée"
      },
      {
        id: 4,
        nomClient: "Sophie Laurent",
        emailClient: "sophie.laurent@example.com",
        telephoneClient: "0654321098",
        titreJeu: "Cyberpunk 2077",
        plateformeJeu: "PC",
        dateReservation: new Date (2024,3,22),
        statutReservation: "Annulée"
      },
      {
        id: 5,
        nomClient: "Marc Dubois",
        emailClient: "marc.dubois@example.com",
        telephoneClient: "0612345678",
        titreJeu: "Red Dead Redemption 2",
        plateformeJeu: "Xbox One",
        dateReservation: new Date(2024,3,27),
        statutReservation: "En attente"
      }
    ];
  }
}
