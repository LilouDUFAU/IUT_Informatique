import { JV } from './../models/jv.model';
import { RES } from './../models/reservation.model';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ReservationsService } from '../services/reservations.service';
import { JvsService } from '../services/jvs.service';

@Component({
  selector: 'app-add-res',
  standalone: false,
  templateUrl: './add-res.component.html',
  styleUrl: './add-res.component.scss',
})
export class AddResComponent implements OnInit {
  formulaire!: FormGroup;
  currentRes!: RES;
  titreJeu!: string;
  plateformeJeu!: string;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private ResService: ReservationsService,
    private jvserv: JvsService
  ) {}

  ngOnInit(): void {
    this.initForm();
    const jeuId = this.route.snapshot.paramMap.get('id');

    if (jeuId) {
      this.jvserv.getJvById(+jeuId).subscribe({
        next: (jeu: JV) => {
          this.formulaire.value.titreJeu = jeu.titre;
          this.formulaire.value.plateformeJeu = jeu.plateforme;
            this.formulaire.patchValue({
            titreJeu: jeu.titre,
            plateformeJeu: jeu.plateforme,
            });
        },
        error: (err) => {
          console.error('Erreur lors de la récupération du jeu :', err);
        },
      });
    } else {
      console.error('Erreur demande de résa qui ne porte pas sur un jeu !');
      alert('Erreur demande de réservation qui ne porte pas sur un jeu !');
    }
  }

  initForm(): void {
    this.formulaire = this.formBuilder.group(
      {
        emailClient: [null, [Validators.required, Validators.minLength(6)]],
        nom: [null],
        telephoneClient: [null, [Validators.required, Validators.minLength(10), Validators.maxLength(14)]],
        titreJeu: [this.titreJeu || null, [Validators.required, Validators.minLength(6)]],
        plateformeJeu: [this.plateformeJeu || null, [Validators.required, Validators.minLength(2)]],
        dateReservation: [null, [Validators.required, Validators.min(0)]],
        statutReservation: [null, [Validators.required, Validators.min(0)]],
      },
      { updateOn: 'blur' }
    );

    this.formulaire.valueChanges.subscribe((formValue) => {
      this.currentRes = {
        id: 0,
        nomClient: formValue.nom,
        emailClient: formValue.emailClient,
        telephoneClient: formValue.telephoneClient,
        titreJeu: formValue.titreJeu,
        plateformeJeu: formValue.plateformeJeu,
        dateReservation: formValue.dateReservation,
        statutReservation: formValue.statutReservation,
      };
    });
  }

  newRes() {
    let newRes: RES = {
      id: 0,
      nomClient: this.formulaire.get('nom')?.value,
      emailClient: this.formulaire.get('emailClient')?.value,
      telephoneClient: this.formulaire.get('telephoneClient')?.value,
      titreJeu: this.formulaire.get('titreJeu')?.value,
      plateformeJeu: this.formulaire.get('plateformeJeu')?.value,
      dateReservation: this.formulaire.get('dateReservation')?.value,
      statutReservation: this.formulaire.get('statutReservation')?.value,
    };

    this.ResService.addRes(newRes).subscribe({
      next: (res) => {
        this.router.navigateByUrl('/res');
        alert('Réservation ajoutée avec succès !');
      },
      error: (err) => {
        console.error('Observable ajout Reservation a émis une erreur : ' + err);
        alert("Désolé, la Reservation n'a pas pu être ajoutée !");
      },
    });
  }
}
