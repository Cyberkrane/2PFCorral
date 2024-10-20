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
  
  public alumno: IAlumno = { id: null, nombre: '', apellido: '', edad: null, curso: '' };

  constructor(
    private readonly dialogRef: MatDialogRef<AlumnoFormComponent>,
    @Inject(MAT_DIALOG_DATA) private readonly data: IAlumno,
    private readonly alumnoService: AlumnoService
  ) { }

  ngOnInit(): void {
    this.alumno = this.data ? { ...this.data } : { id: null, nombre: '', apellido: '', edad: null, curso: '' };
  }

  onSubmit(alumnoForm: any): void {
    if (this.alumno.id) {
      this.alumnoService.updateStudents(this.alumno).subscribe(() => {
        this.dialogRef.close();
      });
    } else {
      this.alumnoService.addStudents(this.alumno).subscribe(() => {
        this.dialogRef.close();
      });
    }
  }
  

  onCancel(): void {
    this.dialogRef.close();
  }
}
