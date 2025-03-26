import { Injectable } from '@angular/core';
import { JV } from '../models/jv.model';
import { HttpClient } from '@angular/common/http';
import { Observable, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JvsService {
  constructor(private http: HttpClient) { }

  getjvs(): Observable<JV[]> {
    return this.http.get<JV[]>('http://localhost:3000/jeux_video');
  }

  getjvById(id: number): Observable<JV> {
    return this.http.get<JV>('http://localhost:3000/jeux_video/' + id);

  }

  addjv(Nouvjv: JV): Observable<JV> {
    return this.getjvs().pipe(
      switchMap(jvs =>
        {
          let maxId = 0;
          jvs.forEach(jv =>
            {maxId = (jv.id > maxId ? jv.id : maxId);});
            Nouvjv.id = maxId + 1;
            return this.http.post<JV>('http://localhost:3000/jeux_video', Nouvjv);
          }
      )
    );
  }
}
