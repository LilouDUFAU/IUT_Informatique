import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LstJvComponent } from './lst-jv/lst-jv.component';
import { LstReservationComponent } from './lst-reservation/lst-reservation.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'jv',
    component: LstJvComponent
  },
  {
    path: 'res',
    component: LstReservationComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
