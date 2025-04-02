import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LstJvComponent } from './lst-jv/lst-jv.component';
import { LstReservationComponent } from './lst-reservation/lst-reservation.component';
import { AddResComponent } from './add-res/add-res.component';
import { JVComponent } from './jv/jv.component';
import { ReservationComponent } from './reservation/reservation.component';
import { ResJvComponent } from './res-jv/res-jv.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'jv',
    component: LstJvComponent,
  },
  {
    path: 'jv/:id',
    component: JVComponent,
  },
  {
    path: 'res',
    component: LstReservationComponent,
  },
  {
    path: 'res/:id',
    component: ReservationComponent,
  },
  {
    path: 'addRes/:id',
    component: AddResComponent,
  },
  { path: 'jv-res/:titreJeu/:plateformeJeu',
    component: ResJvComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
