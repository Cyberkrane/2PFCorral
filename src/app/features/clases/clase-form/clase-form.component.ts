import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { IAlumno } from 'src/app/core/interfaces/alumno.interface';
import { IClase } from 'src/app/core/interfaces/clase.interface';
import { AlumnoService } from 'src/app/core/services/alumno.service';
import { ClaseService } from 'src/app/core/services/clase.service';

@Component({
  selector: 'app-clase-form',
  templateUrl: './clase-form.component.html',
  styleUrls: ['./clase-form.component.scss']
})
export class ClaseFormComponent implements OnInit {

  public clase: IClase = { id: '', nombre: '', descripcion: '', profesor: '', alumnos: [] };
  public alumnos: IAlumno[] = [];

  constructor(
    private readonly dialogRef: MatDialogRef<ClaseFormComponent>,
    @Inject(MAT_DIALOG_DATA) private readonly data: IClase,
    private readonly claseService: ClaseService,
    private readonly alumnoService: AlumnoService
  ) { }

  ngOnInit(): void {
    this.alumnoService.getAllStudents().subscribe((data) => {
      this.alumnos = data; // Cargamos la lista de alumnos
    });
    
    this.clase = this.data ? { ...this.data } : { id: '', nombre: '', descripcion: '', profesor: '', alumnos: [] };
  }

  onSubmit(): void {
    if (this.clase.id) {
      this.claseService.updateClass(this.clase).subscribe(() => {
        this.dialogRef.close(this.clase);
      });
    } else {
      this.claseService.addClass(this.clase).subscribe((newClase) => {
        this.dialogRef.close(newClase);
      });
    }
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}
