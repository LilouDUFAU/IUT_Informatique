import { platformBrowser } from '@angular/platform-browser';
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

  ngOnInit():void {
    this.idjv = this.route.snapshot.params['id'];
    if(this.idjv !== undefined) {
      this.jvService.getJvById(+this.idjv).subscribe(jv => {this.theJv = jv});
    } else {
      this.theJv = this.JV;
    }
  }

  getService(): any {
    return this.jvService;
}

  onAdd(id: number){
    this.router.navigateByUrl('/addRes/' + id);
    this.theJv.quantite = this.theJv.quantite - 1;
    this.jvService.updateJv(this.theJv).subscribe(() => { this.jvService.updateJv(this.theJv); });

  }

  resJv(titre: string, plateforme: string){
    this.router.navigateByUrl('/jv-res/'+ titre + '/' + plateforme);
  }
}
