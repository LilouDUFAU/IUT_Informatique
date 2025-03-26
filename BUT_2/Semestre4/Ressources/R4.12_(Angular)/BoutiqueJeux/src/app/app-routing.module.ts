import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { HomeComponent } from './home/home.component';
import { ListJVSComponent } from './list-jvs/list-jvs.component';
import { JVComponent } from './jv/jv.component';
// import { NewCDComponent } from './new-cd/new-cd.component';

const routes: Routes = [
  // {
  //   path: 'home',
  //   component: HomeComponent
  // },
  {
    path: 'catalogue',
    component: ListJVSComponent,
  },
  {   
    path: 'jv/:id',
    component: JVComponent,
  },
  // {
  //   path: 'ajout',
  //   component: newJVComponent
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
