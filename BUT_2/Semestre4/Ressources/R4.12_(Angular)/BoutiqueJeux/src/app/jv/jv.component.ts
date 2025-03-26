import { Component, Input } from '@angular/core';
import { JV } from '../models/jv.model';
import { OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JvsService } from '../services/jv.service';

@Component({
  selector: 'app-jv',
  standalone: false,
  templateUrl: './jv.component.html',
  styleUrl: './jv.component.scss',
})
export class JVComponent implements OnInit {
  @Input() jv!: JV;
  theJv!: JV;
  idjv!: string;

  constructor(private route: ActivatedRoute, private jvService: JvsService) {}

  ngOnInit() {
    this.idjv = this.route.snapshot.params['id'];
    if (this.idjv !== undefined) {
      this.jvService.getjvById(+this.idjv).subscribe({
        next: (Jv) => {
          this.theJv = Jv;
        },
        error: (err) => {
          console.error('ici');
          alert('pb');
        },
      });
    } else {
      this.theJv = this.jv;
    }
  }
  public onAddJV() {
    this.theJv.quantite++;
  }

  public onRemoveJV() {
    if (this.theJv.quantite > 0) {
      this.theJv.quantite--;
    }
  }
}
