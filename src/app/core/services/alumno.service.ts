import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IAlumno } from '../interfaces/alumno.interface';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { v4 as uuidv4 } from 'uuid';



@Injectable({
  providedIn: 'root'
})
export class AlumnoService {

  private readonly apiUrl = 'http://localhost:3000/students';

  constructor(private readonly http: HttpClient) {}


  getAllStudents(): Observable<IAlumno[]> {
    return this.http.get<IAlumno[]>(this.apiUrl);
  }

  addStudents(alumno: IAlumno): Observable<IAlumno> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    alumno.id = uuidv4();
    return this.http.post<IAlumno>(this.apiUrl, alumno, { headers });
  }
  
  updateStudents(alumno: IAlumno): Observable<IAlumno> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.put<IAlumno>(`${this.apiUrl}/${alumno.id}`, alumno, { headers });
  }

  deleteStudents(id: string): Observable<string> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.delete<string>(`${this.apiUrl}/${id}`, { headers });
  }
}
