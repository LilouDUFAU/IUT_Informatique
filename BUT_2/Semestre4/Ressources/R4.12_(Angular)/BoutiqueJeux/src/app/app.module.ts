import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JVComponent } from './jv/jv.component';
import { ListJVSComponent } from './list-jvs/list-jvs.component';
import { ReservationComponent } from './reservation/reservation.component';
import { ListReservationsComponent } from './list-reservations/list-reservations.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    JVComponent,
    ListJVSComponent,
    ReservationComponent,
    ListReservationsComponent,
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
