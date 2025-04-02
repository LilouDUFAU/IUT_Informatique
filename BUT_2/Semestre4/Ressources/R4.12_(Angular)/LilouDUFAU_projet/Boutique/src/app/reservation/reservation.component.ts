import { JvsService } from './../services/jvs.service';
import { ReservationsService } from './../services/reservations.service';
import { Component, OnInit } from '@angular/core';
import { RES } from '../models/reservation.model';
import { Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JVComponent } from '../jv/jv.component';



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

  constructor(private resService: ReservationsService, private route: ActivatedRoute, private jv: JVComponent, private jvserv: JvsService) { }
  ngOnInit(): void {
    this.idres = this.route.snapshot.params['id'];
    if (this.idres !== undefined) {
      this.resService.getResById(+this.idres).subscribe(res=>{this.theRes=res});
    } else {
      this.theRes = this.RES;
    }
  }

  onReserve() {
    this.resService.addRes(this.theRes);
    alert('Reservation effectuée avec succès');
  }

  onDelete(id : number) {
    this.jvserv.getJvByRes(this.theRes.titreJeu, this.theRes.plateformeJeu).subscribe(jv => {
      jv.quantite = jv.quantite + 1;
      this.jvserv.updateJv(jv).subscribe(() => {
      alert('Quantité mise à jour avec succès');
      });
    });

    this.resService.deleteRes(id).subscribe(() => {
      alert('Reservation annulée avec succès');
    });
    window;location.reload();
  }
}
