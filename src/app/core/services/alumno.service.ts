import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IAlumno } from '../interfaces/alumno.interface';


@Injectable({
  providedIn: 'root',
})
export class AlumnoService {
  private alumnos: IAlumno[] = [
    { id: 1, nombre: 'Juan', apellido: 'Perez', edad: 18, curso: 'Matemáticas' },
    { id: 2, nombre: 'Ana', apellido: 'Garcia', edad: 20, curso: 'Historia' }
  ];

  constructor() {}

  getAlumnos(): Observable<IAlumno[]> {
    return of(this.alumnos);  // Simulamos la devolución de los datos mockeados
  }

  addAlumno(alumno: IAlumno): void {
    this.alumnos.push(alumno);
  }
  
  deleteAlumno(id: number): void {
    this.alumnos = this.alumnos.filter(a => a.id !== id);
  }
  
  updateAlumno(alumno: IAlumno): void {
    const index = this.alumnos.findIndex(a => a.id === alumno.id);
    if (index !== -1) {
      this.alumnos[index] = alumno;
    }
  }
}
