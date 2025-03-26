import { Component, OnInit } from '@angular/core';
import { JV } from '../models/jv.model';
import { Input } from '@angular/core';

@Component({
  selector: 'app-jv',
  standalone: false,
  templateUrl: './jv.component.html',
  styleUrl: './jv.component.scss'
})
export class JVComponent {
  @Input() JV!: JV;
}
