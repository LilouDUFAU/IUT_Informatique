export class reservation {
  id!: number;
  nomClient!: string;
  emailClient!: string;
  telephoneClient!: string;
  titreJeu!: string;
  plateformeJeu!: string;
  dateReservation!: Date;
  statutReservation!: string;

  constructor(
    id: number,
    nomClient: string,
    emailClient: string,
    telephoneClient: string,
    titreJeu: string,
    plateformeJeu: string,
    dateReservation: Date,
    statutReservation: string
  ) {
    this.id = id;
    this.nomClient = nomClient;
    this.emailClient = emailClient;
    this.telephoneClient = telephoneClient;
    this.titreJeu = titreJeu;
    this.plateformeJeu = plateformeJeu;
    this.dateReservation = dateReservation;
    this.statutReservation = statutReservation;
  }
}
