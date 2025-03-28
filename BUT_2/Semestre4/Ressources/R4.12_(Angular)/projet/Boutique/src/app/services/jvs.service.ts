import { Injectable } from '@angular/core';
import { JV } from '../models/jv.model';

@Injectable({
  providedIn: 'root',
})
export class JvsService {
  constructor() {}

  getJvs(): JV[] {
    return [
      {
        id: 1,
        titre: 'The Legend of Zelda: Breath of the Wild',
        plateforme: 'Nintendo Switch',
        genre: 'Action-Aventure',
        developpeur: 'Nintendo',
        dateDeSortie: new Date(2017, 3, 3),
        quantite: 10,
      },
      {
        id: 2,
        titre: 'God of War',
        plateforme: 'PlayStation 4',
        genre: 'Action',
        developpeur: 'Santa Monica Studio',
        dateDeSortie: new Date(2018, 4, 20),
        quantite: 5,
      },
      {
        id: 3,
        titre: 'Elden Ring',
        plateforme: 'PlayStation 5',
        genre: 'RPG',
        developpeur: 'FromSoftware',
        dateDeSortie: new Date(2022, 2, 25),
        quantite: 0,
      },
      {
        id: 4,
        titre: 'Horizon Forbidden West',
        plateforme: 'PlayStation 5',
        genre: 'Action-RPG',
        developpeur: 'Guerrilla Games',
        dateDeSortie: new Date(2022, 2, 18),
        quantite: 6,
      },
      {
        id: 5,
        titre: 'Red Dead Redemption 2',
        plateforme: 'Xbox One',
        genre: 'Aventure',
        developpeur: 'Rockstar Games',
        dateDeSortie: new Date(2018, 10, 26),
        quantite: 7,
      },
      {
        id: 6,
        titre: 'Cyberpunk 2077',
        plateforme: 'PC',
        genre: 'RPG',
        developpeur: 'CD Projekt Red',
        dateDeSortie: new Date(2020, 12, 10),
        quantite: 9,
      },
      {
        id: 7,
        titre: 'Final Fantasy VII Remake',
        plateforme: 'PlayStation 4',
        genre: 'RPG',
        developpeur: 'Square Enix',
        dateDeSortie: new Date(2020, 4, 10),
        quantite: 4,
      },
      {
        id: 8,
        titre: 'The Witcher 3: Wild Hunt',
        plateforme: 'PC',
        genre: 'RPG',
        developpeur: 'CD Projekt Red',
        dateDeSortie: new Date(2015, 5, 19),
        quantite: 12,
      },
      {
        id: 9,
        titre: 'Super Mario Odyssey',
        plateforme: 'Nintendo Switch',
        genre: 'Plateforme',
        developpeur: 'Nintendo',
        dateDeSortie: new Date(2017, 10, 27),
        quantite: 11,
      },
      {
        id: 10,
        titre: 'Halo Infinite',
        plateforme: 'Xbox Series X',
        genre: 'FPS',
        developpeur: '343 Industries',
        dateDeSortie: new Date(2021, 12, 8),
        quantite: 5,
      },
    ];
  }

  getJvById(id: number): JV {
    const jv = this.getJvs().find((jv) => jv.id === id);
    if (jv) {
      return jv;
    } else {
      throw new Error('Jeu vidéo non trouvé');
    }
  }

  updateJv(jv: JV): void {
    const jvs = this.getJvs();
    const index = jvs.findIndex((j) => j.id === jv.id);
    jvs[index] = jv;
  }
}
