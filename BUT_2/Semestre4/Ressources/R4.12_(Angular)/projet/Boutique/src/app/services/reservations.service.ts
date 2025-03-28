import { Injectable } from '@angular/core';
import { RES } from '../models/reservation.model';
import { JvsService } from './jvs.service'

@Injectable({
  providedIn: 'root',
})
export class ReservationsService {
  constructor(private jvserv: JvsService) {}

  getRES(): RES[] {
    return [
      {
        id: 1,
        nomClient: 'Jean Dupont',
        emailClient: 'jean.dupont@example.com',
        telephoneClient: '0123456789',
        titreJeu: 'The Legend of Zelda: Breath of the Wild',
        plateformeJeu: 'Nintendo Switch',
        dateReservation: new Date(2024, 3, 25),
        statutReservation: 'Confirmée',
      },
      {
        id: 2,
        nomClient: 'Alice Martin',
        emailClient: 'alice.martin@example.com',
        telephoneClient: '0987654321',
        titreJeu: 'God of War',
        plateformeJeu: 'PlayStation 4',
        dateReservation: new Date(2024, 3, 26),
        statutReservation: 'En attente',
      },
      {
        id: 3,
        nomClient: 'Lucas Bernard',
        emailClient: 'lucas.bernard@example.com',
        telephoneClient: '0671234567',
        titreJeu: 'The Legend of Zelda: Breath of the Wild',
        plateformeJeu: 'Nintendo Switch',
        dateReservation: new Date(2024, 3, 20),
        statutReservation: 'Confirmée',
      },
      {
        id: 4,
        nomClient: 'Sophie Laurent',
        emailClient: 'sophie.laurent@example.com',
        telephoneClient: '0654321098',
        titreJeu: 'Cyberpunk 2077',
        plateformeJeu: 'PC',
        dateReservation: new Date(2024, 3, 22),
        statutReservation: 'Annulée',
      },
      {
        id: 5,
        nomClient: 'Marc Dubois',
        emailClient: 'marc.dubois@example.com',
        telephoneClient: '0612345678',
        titreJeu: 'Red Dead Redemption 2',
        plateformeJeu: 'Xbox One',
        dateReservation: new Date(2024, 3, 27),
        statutReservation: 'En attente',
      },
    ];
  }

  getResById(id: number): RES {
    const res = this.getRES().find((res) => res.id === id);
    if (res) {
      return res;
    } else {
      throw new Error('Réservation non trouvée !');
    }
  }

  getResByJv(titreJeu: string, plateformeJeu: string): RES[] {
    return this.getRES().filter(
      (res) =>
        res.titreJeu.toLowerCase() === titreJeu.toLowerCase() &&
        res.plateformeJeu.toLowerCase() === plateformeJeu.toLowerCase()
    );
  }

  updateRes(res: RES): void {
    const resIndex = this.getRES().findIndex((res) => res.id === res.id);
    if (resIndex !== -1) {
      this.getRES()[resIndex] = res;
    } else {
      throw new Error('Réservation non trouvée !');
    }
  }
}
