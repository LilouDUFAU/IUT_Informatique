import { JvsService } from './../services/jv.service';
import { Component, OnInit } from '@angular/core';
import { JV } from '../models/jv.model';

@Component({
  selector: 'app-list-jvs',
  standalone: false,
  templateUrl: './list-jvs.component.html',
  styleUrl: './list-jvs.component.scss'
})
export class ListJVSComponent implements OnInit{
  listJv!: JV[];
  constructor(private myJvService: JvsService) {}

  ngOnInit(): void {
    this.myJvService.getjvs().subscribe((Jvs)=> {this.listJv = Jvs;});

  }
}


