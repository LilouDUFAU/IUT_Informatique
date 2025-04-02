import { Injectable } from '@angular/core';
import { JV } from '../models/jv.model';
import { HttpClient } from '@angular/common/http';
import { Observable, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class JvsService {
  constructor(private http: HttpClient) {}

  getJvs(): Observable<JV[]> {
    return this.http.get<JV[]>('http://localhost:3000/jeux_video');
  }

  getJvById(id: number):Observable<JV> {
    return this.http.get<JV>(`http://localhost:3000/jeux_video/` + id);
  }

  getJvByTF(titre: string, platef: string): Observable<JV> {
    return new Observable((observer) => {
      this.getJvs().subscribe((jv) => {
        const foundJv = jv.find(
          (jv) =>
            jv.titre.toLowerCase() === titre.toLowerCase() &&
            jv.plateforme.toLowerCase() === platef.toLowerCase()
        );
        if (foundJv) {
          observer.next(foundJv);
        } else {
          observer.error(new Error('Jeu vidéo non trouvé'));
        }
        observer.complete();
      });
    });
  }


  getJvByRes(titre: string, platef: string): Observable<JV> {
    return new Observable((observer) => {
      this.getJvByTF(titre, platef).subscribe({
        next: (jv) => {
          observer.next(jv); // Directly return the single JV found
          observer.complete();
        },
        error: (err) => {
          observer.error(err); // Pass the error if not found
        },
      });
    });
  }

  updateJv(jv: JV): Observable<JV[]> {
    return this.http.put<JV>(`http://localhost:3000/jeux_video/${jv.id}`, jv).pipe(
      switchMap(() => this.getJvs())
    );
  }
}
