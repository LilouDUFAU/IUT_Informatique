import { JvsService } from './../services/jvs.service';
import { Component, OnInit } from '@angular/core';
import { JV } from '../models/jv.model';

@Component({
  selector: 'app-lst-jv',
  standalone: false,
  templateUrl: './lst-jv.component.html',
  styleUrl: './lst-jv.component.scss',
})
export class LstJvComponent implements OnInit {
  lstJv!: JV[];
  filteredJv!: any[];
  categories: string[] = [];
  plateformes: string[] = [];

  constructor(private jvsService: JvsService) {}
  ngOnInit(): void {
    this.jvsService.getJvs().subscribe((jvs) => {
      this.lstJv = jvs;
      this.filteredJv = jvs;
      this.categories = [...new Set(jvs.map((jv) => jv.genre))];
      this.plateformes = [...new Set(jvs.map((jv) => jv.plateforme))];
     });
  }

  onSearch(term: string): void {
    this.filteredJv = this.lstJv.filter((jv) =>
      jv.titre.toLowerCase().includes(term.toLowerCase()) ||
      jv.plateforme.toLowerCase().includes(term.toLowerCase())
    );
  }

  applyFilters(filters: { category?: string; plateforme?: string }): void {
    this.filteredJv = this.lstJv.filter((jv) => {
      return (
        (!filters.category || jv.genre === filters.category) &&
        (!filters.plateforme || jv.plateforme === filters.plateforme)
      );
    });
  }
}
