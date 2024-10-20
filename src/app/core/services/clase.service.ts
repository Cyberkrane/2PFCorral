import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IClase } from '../interfaces/clase.interface';
import { v4 as uuidv4 } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class ClaseService {

  private readonly apiUrl = 'http://localhost:3000/classes';

  constructor(private readonly http: HttpClient) {}

  getAllClasses(): Observable<IClase[]> {
    return this.http.get<IClase[]>(this.apiUrl);
  }

  addClass(clase: IClase): Observable<IClase> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    clase.id = uuidv4(); // Genera un UUID único para la nueva clase
    return this.http.post<IClase>(this.apiUrl, clase, { headers });
  }

  updateClass(clase: IClase): Observable<IClase> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.put<IClase>(`${this.apiUrl}/${clase.id}`, clase, { headers });
  }

  deleteClass(id: string): Observable<void> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.delete<void>(`${this.apiUrl}/${id}`, { headers });
  }
}
