import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClasesComponent } from './clases.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule } from '@angular/forms';
import { ClaseFormComponent } from './clase-form/clase-form.component';



@NgModule({
  declarations: [
    ClasesComponent,
    ClaseFormComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule
  ]
})
export class ClasesModule { }
