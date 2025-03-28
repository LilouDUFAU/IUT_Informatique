import { Component, OnInit } from '@angular/core';
import { JV } from '../models/jv.model';
import { JvsService } from '../services/jvs.service';

@Component({
  selector: 'app-lst-jv',
  standalone: false,
  templateUrl: './lst-jv.component.html',
  styleUrl: './lst-jv.component.scss',
})
export class LstJvComponent implements OnInit {
  lstJv!: JV[];

  constructor(private jvsService: JvsService) {}
  ngOnInit(): void {
    this.lstJv = this.jvsService.getJvs();
  }
}
