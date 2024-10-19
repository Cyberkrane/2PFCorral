import { Component, OnInit } from '@angular/core';
import { IAlumno } from 'src/app/core/interfaces/alumno.interface';
import { AlumnoService } from 'src/app/core/services/alumno.service';
import { MatDialog } from '@angular/material/dialog';
import { AlumnoFormComponent } from './alumno-form/alumno-form.component';
import { ConfirmDeleteComponent } from './confirm-delete/confirm-delete.component';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.scss']
})
export class AlumnosComponent implements OnInit {

  alumnos: IAlumno[] = [];
  displayedColumns: string[] = ['id', 'nombre', 'apellido', 'actions'];

  constructor(private readonly alumnoService: AlumnoService, private readonly dialog: MatDialog) {}

  ngOnInit(): void {
   this.loadAlumnos();
  }

  agregarAlumno(): void {
    const dialogRef = this.dialog.open(AlumnoFormComponent, {
      width: '400px',
    });
  
    dialogRef.afterClosed().subscribe(() => {
      this.loadAlumnos(); // Cargar de nuevo los alumnos después de agregar
    });
  }
  
  editarAlumno(alumno: IAlumno): void {
    const dialogRef = this.dialog.open(AlumnoFormComponent, {
      width: '400px',
      data: alumno // Pasar el alumno a editar
    });
  
    dialogRef.afterClosed().subscribe(() => {
      this.loadAlumnos(); // Cargar de nuevo los alumnos después de editar
    });
  }

  eliminarAlumno(id: number): void {
    const dialogRef = this.dialog.open(ConfirmDeleteComponent, {
      width: '300px'
    });
  
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.alumnoService.deleteAlumno(id);
        this.loadAlumnos(); // Recargar la lista de alumnos
      }
    });
  }
  
  private loadAlumnos(): void {
    this.alumnoService.getAlumnos().subscribe((data) => {
      this.alumnos = data;
    });

}
}
