import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { IAlumno } from 'src/app/core/interfaces/alumno.interface';
import { AlumnoService } from 'src/app/core/services/alumno.service';
import { AlumnoFormComponent } from './alumno-form/alumno-form.component';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.scss']
})
export class AlumnosComponent implements OnInit {
  alumnos: IAlumno[] = [];
  displayedColumns: string[] = [ 'nombre', 'apellido','edad', 'id', 'actions'];

  constructor(private readonly alumnoService: AlumnoService, private readonly dialog: MatDialog) {}

  ngOnInit(): void {
    this.loadAlumnos();
    console.log(this.alumnos);
  }

  loadAlumnos(): void {
    this.alumnoService.getAllStudents().subscribe(data => {
      this.alumnos = data;
      console.log(this.alumnos);
    })
  }

  agregarAlumno(): void {
    const dialogRef = this.dialog.open(AlumnoFormComponent, {
      data: null // No pasa datos porque es un nuevo alumno
    });

    dialogRef.afterClosed().subscribe(() => {
      this.loadAlumnos(); // Recargar la lista de alumnos
    });
  }

  editarAlumno(alumno: IAlumno): void {
    const dialogRef = this.dialog.open(AlumnoFormComponent, {
      data: alumno // Pasar el alumno a editar
    });

    dialogRef.afterClosed().subscribe(() => {
      this.loadAlumnos(); // Recargar la lista de alumnos
    });
  }

  eliminarAlumno(id: string): void {
    this.alumnoService.deleteStudents(id).subscribe(() => {
      this.alumnos = this.alumnos.filter(alumno => alumno.id !== id); // Elimina el alumno localmente
    });
  }
}
