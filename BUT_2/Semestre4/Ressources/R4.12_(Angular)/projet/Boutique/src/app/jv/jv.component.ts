import { Component, OnInit } from '@angular/core';
import { JV } from '../models/jv.model';
import { Input } from '@angular/core';
import { JvsService } from '../services/jvs.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-jv',
  standalone: false,
  templateUrl: './jv.component.html',
  styleUrl: './jv.component.scss'
})
export class JVComponent implements OnInit{
  @Input() JV!: JV;
  theJv!: JV;
  idjv!: string;

  constructor(private jvService: JvsService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.idjv = this.route.snapshot.params['id'];
    if(this.idjv !== undefined) {
      this.theJv = this.jvService.getJvById(+this.idjv);
    } else {
      this.theJv = this.JV;
    }
  }

  onAdd(){
    alert('Jeu ajouté au panier');
    this.theJv.quantite = this.theJv.quantite - 1;
    this.jvService.updateJv(this.theJv);
  }

  onDelete(){
    alert('Jeu supprimé du panier');
    this.theJv.quantite = this.theJv.quantite + 1;
    this.jvService.updateJv(this.theJv);
  }

  resJv(titre: string, plateforme: string){
    this.router.navigateByUrl('/jv-res/' + this.theJv.titre + '/' + this.theJv.plateforme);

  }
}
