import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlumnosComponent } from './alumnos.component';
import { SharedModule } from 'src/app/shared/shared/shared.module';
import { AlumnoFormComponent } from './alumno-form/alumno-form.component';
import { ConfirmDeleteComponent } from './confirm-delete/confirm-delete.component';



@NgModule({
  declarations: [
    AlumnosComponent,
    AlumnoFormComponent,
    ConfirmDeleteComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class AlumnosModule { }
