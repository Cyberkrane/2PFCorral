import { Component, OnInit } from '@angular/core';
import { IClase } from 'src/app/core/interfaces/clase.interface';
import { ClaseService } from 'src/app/core/services/clase.service';
import { MatDialog } from '@angular/material/dialog';
import { ClaseFormComponent } from './clase-form/clase-form.component';

@Component({
  selector: 'app-clases',
  templateUrl: './clases.component.html',
  styleUrls: ['./clases.component.scss']
})
export class ClasesComponent implements OnInit {
  clases: IClase[] = [];
  displayedColumns: string[] = [ 'nombre', 'profesor', 'alumnos', 'id', 'actions'];

  constructor(private readonly claseService: ClaseService, private readonly dialog: MatDialog) {}

  ngOnInit(): void {
    this.claseService.getAllClasses().subscribe((data) => {
      this.clases = data;
    });
  }

  agregarClase(): void {
    const dialogRef = this.dialog.open(ClaseFormComponent);
    
    dialogRef.afterClosed().subscribe((newClase: IClase) => {
      if (newClase) {
        this.clases.push(newClase); // Agrega la nueva clase a la lista
      }
    });
  }
  
  editarClase(clase: IClase): void {
    const dialogRef = this.dialog.open(ClaseFormComponent, {
      data: clase
    });
    
    dialogRef.afterClosed().subscribe((updatedClase: IClase) => {
      if (updatedClase) {
        const index = this.clases.findIndex(c => c.id === updatedClase.id);
        if (index !== -1) {
          this.clases[index] = updatedClase; // Actualiza la clase en la lista
        }
      }
    });
  }

  eliminarClase(id: string): void {
    this.claseService.deleteClass(id).subscribe(() => {
      this.clases = this.clases.filter(clase => clase.id !== id);
    });
  }
}
