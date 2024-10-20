import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IClase } from '../interfaces/clase.interface';
import { HttpClient } from '@angular/common/http';
import { v4 as uuidv4 } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class ClaseService {
  private readonly apiUrl = 'http://localhost:3000/classes';

  constructor(private readonly http: HttpClient) { }

  getAllClasses(): Observable<IClase[]> {
    return this.http.get<IClase[]>(this.apiUrl);
  }

  addClass(clase: IClase): Observable<IClase> {
    clase.id = uuidv4(); // Generamos un ID
    return this.http.post<IClase>(this.apiUrl, clase);
  }

  updateClass(clase: IClase): Observable<IClase> {
    return this.http.put<IClase>(`${this.apiUrl}/${clase.id}`, clase);
  }

  deleteClass(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
