import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JVComponent } from './jv/jv.component';
import { ReservationComponent } from './reservation/reservation.component';
import { LstReservationComponent } from './lst-reservation/lst-reservation.component';
import { LstJvComponent } from './lst-jv/lst-jv.component';
import { HeaderComponent } from './header/header.component';
import { SearchComponent } from './search/search.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    JVComponent,
    ReservationComponent,
    LstReservationComponent,
    LstJvComponent,
    HeaderComponent,
    SearchComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
