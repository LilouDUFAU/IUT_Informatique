import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  standalone: false,
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent {
  @Output() searchEvent = new EventEmitter<string>();

  searchTerm: string = '';

  onSearchChange() {
    this.searchEvent.emit(this.searchTerm);
  }

}
