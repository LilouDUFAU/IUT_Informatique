export class JV {
    id!: number;
    titre!: string;
    plateforme!: string;
    genre!: string;
    developpeur!: string;
    dateDeSortie!: Date;
    quantite!: number;
  
    constructor(
      id: number,
      titre: string,
      plateforme: string,
      genre: string,
      developpeur: string,
      dateDeSortie: Date,
      quantite: number
    ) {
      this.id = id;
      this.titre = titre;
      this.plateforme = plateforme;
      this.genre = genre;
      this.developpeur = developpeur;
      this.dateDeSortie = dateDeSortie;
      this.quantite = quantite;
    }
  }
  