import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlumnosComponent } from './features/alumnos/alumnos.component';
import { ClasesComponent } from './features/clases/clases.component';
import { CursosComponent } from './features/cursos/cursos.component';

const routes: Routes = [
  { path: 'alumnos', component: AlumnosComponent },
  { path: 'clases', component: ClasesComponent },
  { path: 'cursos', component: CursosComponent },
  { path: '', redirectTo: '/alumnos', pathMatch: 'full' }, // Ruta por defecto
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
