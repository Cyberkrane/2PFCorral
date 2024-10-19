import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { IAlumno } from 'src/app/core/interfaces/alumno.interface';
import { AlumnoService } from 'src/app/core/services/alumno.service';

@Component({
  selector: 'app-alumno-form',
  templateUrl: './alumno-form.component.html',
  styleUrls: ['./alumno-form.component.scss']
})
export class AlumnoFormComponent implements OnInit {
  public alumno: IAlumno = { id: 0, nombre: '', apellido: '', edad: 0, curso: '' };

  constructor(
    private readonly dialogRef: MatDialogRef<AlumnoFormComponent>,
    @Inject(MAT_DIALOG_DATA) private readonly data: IAlumno,
    private readonly alumnoService: AlumnoService
  ) { }

  ngOnInit(): void {
    this.alumno = this.data ? { ...this.data } : { id: 0, nombre: '', apellido: '', edad: 0, curso: '' };
  }

  onSubmit(form: any): void {
    if (this.alumno.id) {
      this.alumnoService.updateAlumno(this.alumno);
    } else {
      this.alumnoService.addAlumno(this.alumno);
    }
    this.dialogRef.close();
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}
