import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-res',
  standalone: false,
  templateUrl: './add-res.component.html',
  styleUrl: './add-res.component.scss'
})
export class AddResComponent implements OnInit {
  formulaire!: FormGroup;
  constructor(private formBuilder: FormBuilder) {}
  ngOnInit(): void {
    this.formulaire = this.formBuilder.group({
      nom: '',
      email: '',
      tel: '',
      titreJeu: '',
      plateformeJeu: '',
      dateReservation: '',
      statutReservation: ''
    });
  }

}
