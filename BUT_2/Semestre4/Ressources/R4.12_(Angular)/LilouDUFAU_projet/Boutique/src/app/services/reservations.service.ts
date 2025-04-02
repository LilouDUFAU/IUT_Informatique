import { Injectable } from '@angular/core';
import { RES } from '../models/reservation.model';
import { HttpClient } from '@angular/common/http';
import { Observable, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ReservationsService {
  constructor(private http: HttpClient) {}

  getRES(): Observable<RES[]> {
    return this.http.get<RES[]>('http://localhost:3000/reservations');
  }

  getResById(id: number): Observable<RES> {
    return this.http.get<RES>(`http://localhost:3000/reservations/` + id);
  }

  getResByJv(titreJeu: string, plateformeJeu: string): Observable<RES[]> {
    return new Observable((observer) => {
      this.getRES().subscribe((reservations) => {
        const filteredRes = reservations.filter(
          (res) =>
            res.titreJeu.toLowerCase() === titreJeu.toLowerCase() &&
            res.plateformeJeu.toLowerCase() === plateformeJeu.toLowerCase()
        );
        observer.next(filteredRes);
        observer.complete();
      });
    });
  }

  updateRes(res: RES): Observable<RES> {
    return this.http.put<RES>(`http://localhost:3000/reservations/${res.id}`, res);
  }

  addRes(nouvRes : RES): Observable<RES> {
    return this.getRES().pipe(
      switchMap(ress =>
      {
      let maxId = 0;
      ress.forEach (res => { maxId = (res.id > maxId ? res.id : maxId); } );
      nouvRes.id = maxId+1;
      return this.http.post<RES>('http://localhost:3000/reservations', nouvRes);
      }
     ));
  }

  deleteRes(id : number): Observable<RES> {
    return this.http.delete<RES>(`http://localhost:3000/reservations/` + id );
  }


}

