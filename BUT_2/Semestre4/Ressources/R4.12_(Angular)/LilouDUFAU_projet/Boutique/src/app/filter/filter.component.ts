import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  standalone: false,
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss'
})
export class FilterComponent {
  @Input() categories: string[] = [];
  @Input() plateformes: string[] = [];
  @Input() titreJeu: string[] = [];

  @Output() filterEvent = new EventEmitter<{ category?: string; plateforme?: string; titreJeu?: string }>();

  selectedCategory?: string;
  selectedPlateforme?: string;
  selectedTitreJeu?: string;

  onFilterChange() {
    this.filterEvent.emit({
      category: this.selectedCategory,
      plateforme: this.selectedPlateforme,
      titreJeu: this.selectedTitreJeu,
    });
  }
}
